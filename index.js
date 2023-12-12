const axios = require('axios');

class Translator {
    constructor(source, target) {
        this.source = source;
        this.target = target;
        this.baseUrl = '
https://voxa-translate.replit.app/api'; // send request to API
    }

    async translate(text) {
        try {
            const response = await axios.get(this.baseUrl, {
                params: {
                    translate: text,
                    from: this.source,
                    to: this.target
                }
            });
            return response.data.translated;
        } catch (error) {
            throw new Error('Translation failed:', error);
        }
    }
}

module.exports = { Translator };
