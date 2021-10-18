from flask import Flask, jsonify
from test_object.test_questions import Question, test_questions

# Test Questions
question_set = test_questions

app = Flask(__name__)

@app.route('/get-questions')
def get_questions():
    return jsonify(questions=[q.serialize() for q in question_set])