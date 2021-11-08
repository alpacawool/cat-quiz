# Based code from https://www.cloudamqp.com/docs/python.html
# and https://www.rabbitmq.com/tutorials/tutorial-six-python.html
# publish.py
import pika, os, ssl, json, uuid
from dotenv import load_dotenv


# Load environmental variables
load_dotenv()

class WikiClient(object):

    def __init__(self):

        # Set up connection
        self.url = os.environ.get('CLOUDAMQP_URL')
        self.params = pika.URLParameters(self.url)
        self.context = ssl.SSLContext(ssl.PROTOCOL_TLSv1_2)
        self.params.ssl_options = pika.SSLOptions(self.context, server_hostname='CLOUDAMQP_HOST') 
        self.connection = pika.BlockingConnection(self.params)

        self.channel = self.connection.channel()

        result = self.channel.queue_declare(queue='wikiscrape-pat', exclusive=False, durable=False)
        self.callback_queue = result.method.queue

        self.channel.basic_consume(
            queue=self.callback_queue,
            on_message_callback=self.on_response,
            auto_ack=True)

    def on_response(self, ch, method, props, body):
        if self.corr_id == props.correlation_id:
            self.response = body

    def call(self, n):
        self.response = None
        self.corr_id = str(uuid.uuid4())
        self.channel.basic_publish(
            exchange='',
            routing_key='wikiscrape-pat',
            properties=pika.BasicProperties(
                reply_to=self.callback_queue,
                correlation_id=self.corr_id,
                headers={"x-delay":1000},
                delivery_mode=2,
            ),
            body=n)
        while self.response is None:
            self.connection.process_data_events()
        return self.response
    
    def retrieve_image_url(self, query):
        message = {
            'query': query
        }
        image_response = (json.loads(self.call(json.dumps(message))))
        print(image_response)
        return image_response["image_url"]
        

# # Test request
# wiki_client = WikiClient()
# wiki_client.retrieve_image_url('Japanese_Bobtail')
# wiki_client.retrieve_image_url('Persian_Cat')