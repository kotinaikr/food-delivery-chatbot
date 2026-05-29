from langchain_google_genai import ChatGoogleGenerativeAI

from dotenv import load_dotenv

import os

load_dotenv()

llm = ChatGoogleGenerativeAI(
    model="gemini-2.5-flash",
    temperature=0
)

def ask_gemini(question):

    response = llm.invoke(question)

    return response.content