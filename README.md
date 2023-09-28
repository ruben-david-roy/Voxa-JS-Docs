# 🌐 VoxaJS - Translation API

VoxaJS provides an easy way to translate text between different languages using the Voxa Translation API. Convert your ideas into multiple languages with just a few lines of JavaScript!

## 📌 Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Parameters](#parameters)

## 📦 Installation

Install the package using npm:
```bash
npm install voxa-js
```

## 📖 Usage

Integrating VoxaJS into your project is straightforward:
```javascript
const { Translator } = require('voxa-js');
const translator = new Translator('en', 'fr');
translator.translate('Hello').then(console.log); // Outputs: "Bonjour"
```

## 📝 Parameters

When creating a new `Translator` instance, you can specify the following parameters:

| Parameter   | Description                                                   | Example |
|-------------|---------------------------------------------------------------|---------|
| `source`    | The original language of the text (ISO 639-1 code).           | en      |
| `target`    | The target language to which you want the text translated (ISO 639-1 code). | fr |

**Note**: ⚠️ Make sure to use valid ISO 639-1 language codes.


Happy Translating with VoxaJS! 🌍🎉
