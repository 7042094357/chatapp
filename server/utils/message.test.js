var expect = require('expect')

var {generateMessage,generateLocationMessage} = require('./message');

describe('generateMessage',()=>{
  it('should generate the correct message object',()=>{
    var from = 'Rishabh';
    var text = 'Some message to test';

    var message = generateMessage(from,text);

    expect(message.from).toBe(from);
    expect(message.text).toBe(text);
    expect(typeof message.createdAt).toBe('number');
  });
});

describe('generateLocationMessage',()=>{
  it('should generate the correct location object',()=>{
    var from = 'Rishabh';
    var latitude = 15;
    var longitude = 19;
    var url = 'http://www.google.com/maps?q=15,19';
    var message = generateLocationMessage(from,latitude,longitude);

    expect(message.from).toBe(from);
    expect(message.url).toBe(url);
    expect(typeof message.createdAt).toBe('number');
  });
});
