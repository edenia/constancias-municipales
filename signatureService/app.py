# save this as app.py
from flask import Flask, jsonify
from signer import sing

app = Flask(__name__)

@app.route("/")
def server():
  return 'OK'

@app.route("/signer", methods=['POST'])
def signer():
  docSignerInfo = sing()
  return jsonify(docSignerInfo)