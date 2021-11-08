class Question():
    def __init__(self, id, title, answer_0, answer_1, answer_2, correct):
        self.id = id
        self.title = title
        self.answer_0 = answer_0
        self.answer_1 = answer_1
        self.answer_2 = answer_2
        self.correct = correct
        self.image = ''
    
    # Serialize object to pass in Flask
    # Based on https://stackoverflow.com/questions/21411497/
    def serialize(self):
        return {
            'id': self.id,
            'title': self.title,
            'answer_0': self.answer_0,
            'answer_1': self.answer_1,
            'answer_2': self.answer_2,
            'correct': self.correct,
            'image': self.image
        }
    
    # Setter for image url of question
    def setImage(self, new_image):
        self.image = new_image

test_questions = [
    Question(
        0,
        "What cat breed is this?",
        "Siamese",
        "Persian",
        "Manx",
        1
    ),
    Question(
        1,
        "What cat breed is this?",
        "Norwegian Forest",
        "Siberian",
        "Himalayan",
        0
    ),
    Question(
        2,
        "What cat breed is this?",
        "Egyptian Mau",
        "Bengal",
        "Russian Blue",
        0
    ),
    Question(
        3,
        "What cat breed is this?",
        "Manx",
        "Ragdoll",
        "Japanese Bobtail",
        2
    )

]
