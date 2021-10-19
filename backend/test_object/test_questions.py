# Test Questions

class Question:
    def __init__(self, id, title, answer_0, answer_1, answer_2, correct, image):
        self.id = id
        self.title = title
        self.answer_0 = answer_0
        self.answer_1 = answer_1
        self.answer_2 = answer_2
        self.correct = correct
        self.image = image
    
    # https://stackoverflow.com/questions/21411497/
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


test_questions = [
    Question(
        0,
        "What cat breed is this?",
        "Siamese",
        "Persian",
        "Manx",
        1,
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Doll_face_silver_Persian.jpg/800px-Doll_face_silver_Persian.jpg"
    ),
    Question(
        1,
        "What cat breed is this?",
        "Norwegian Forest",
        "Siberian",
        "Himalayan",
        0,
        "https://upload.wikimedia.org/wikipedia/en/7/70/Norwegian_Forest_Cat_in_snow_%28closeup%29_%28cropped%29.jpg"
    ),
    Question(
        2,
        "What cat breed is this?",
        "Egyptian Mau",
        "Bengal",
        "Russian Blue",
        0,
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Egyptian_Mau_Bronze.jpg/1024px-Egyptian_Mau_Bronze.jpg"
    ),
    Question(
        3,
        "What cat breed is this?",
        "Manx",
        "Ragdoll",
        "Japanese Bobtail",
        2,
        "https://upload.wikimedia.org/wikipedia/commons/5/56/JapaneseBobtailBlueEyedMi-ke.JPG"
    )

]