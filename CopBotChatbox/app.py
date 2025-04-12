from flask import Flask, render_template, request, jsonify
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np
from flask_cors import CORS  # Import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Define your question-answer pairs
qa_pairs={}
# Preprocess the questions
questions = list("police_data.csv")
vectorizer = TfidfVectorizer()
X = vectorizer.fit_transform(questions)

def get_response(user_input):
    try:
        print(f"User input: {user_input}")  # Debugging: Print the user input
        
        # Vectorize the user input
        user_input_vec = vectorizer.transform([user_input])
        print("User input vectorized successfully.")  # Debugging: Confirm vectorization
        
        # Compute similarity with all questions
        similarities = cosine_similarity(user_input_vec, X)
        print("Similarities computed:", similarities)  # Debugging: Print similarity scores
        
        most_similar_idx = np.argmax(similarities)
        print(f"Most similar question index: {most_similar_idx}")  # Debugging: Print the index
        
        # Check if the similarity is above a threshold
        if similarities[0, most_similar_idx] > 0.5:  # Adjust threshold as needed
            response = qa_pairs[questions[most_similar_idx]]
            print(f"Response: {response}")  # Debugging: Print the response
            return response
        else:
            return "Sorry, I can only answer questions related to police procedures."
    except Exception as e:
        print(f"Error in get_response: {e}")  # Debugging: Print the error
        return "Sorry, I encountered an error. Please try again later."

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/get_response", methods=["POST"])
def chatbot_response():
    try:
        user_input = request.json["user_input"]
        print(f"Received user input: {user_input}")  # Debugging: Print the user input
        response = get_response(user_input)
        return jsonify({"response": response})
    except Exception as e:
        print(f"Error in chatbot_response: {e}")  # Debugging: Print the error
        return jsonify({"response": "Sorry, I encountered an error. Please try again later."})

if __name__ == "__main__":
    app.run(debug=True)