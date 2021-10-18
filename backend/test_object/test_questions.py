# Test Questions

class Question:
    def __init__(self, id, title, answer_1, answer_2, answer_3, correct, image):
        self.id = id
        self.title = title
        self.answer_1 = answer_1
        self.answer_2 = answer_2
        self.answer_3 = answer_3
        self.correct = correct
        self.image = image
    
    # https://stackoverflow.com/questions/21411497/
    def serialize(self):
        return {
            'id': self.id,
            'title': self.title,
            'answer_1': self.answer_1,
            'answer_2': self.answer_2,
            'answer_3': self.answer_3,
            'correct': self.correct,
            'image': self.image
        }


test_questions = [
    Question(
        0,
        "What cat breed is this?",
        "Siamese",
        "Persian",
        "Manx",
        2,
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Doll_face_silver_Persian.jpg/800px-Doll_face_silver_Persian.jpg"
    ),
    Question(
        1,
        "What cat breed is this?",
        "Norwegian Forest",
        "Siberian",
        "Himalayan",
        1,
        "https://upload.wikimedia.org/wikipedia/en/7/70/Norwegian_Forest_Cat_in_snow_%28closeup%29_%28cropped%29.jpg"
    )

]