from flask import Flask, jsonify
from test_object.wiki_image_client import WikiClient
from test_object.test_questions import Question, test_questions

# Questions
question_set = test_questions

app = Flask(__name__)

@app.route('/get-questions')
def get_questions():
    assign_wiki_images(question_set)
    for question in question_set:
        print(question_set[0].image)
    return jsonify(questions=[q.serialize() for q in question_set])

# Assign images to questions using Wiki Image Scraping Service
def assign_wiki_images(question_list):
    wiki_client = WikiClient()

    # Queries for images
    queries = [
        "Persian_cat",
        "Norwegian_Forest_cat",
        "Egyptian_Mau",
        "Japanese_Bobtail"
    ]
    # Make a query for each image
    for i in range(0, len(question_list)):
        new_image = wiki_client.retrieve_image_url(queries[i])
        question_list[i].setImage(new_image)


    
