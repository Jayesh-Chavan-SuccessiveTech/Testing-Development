import { Utils } from '../app/Utils';

describe('Utils test suite', () => {

  // beforeAll(() => console.log('before all test cases'));
  // beforeEach(() => console.log('before every test cases'));
  
  test.skip('first test', () => {
    const result = Utils.toUpperCase('sdff');
    expect(result).toBe('SDFF')
  })

  test('parse simple url', () => {
    // for checking primittive values use toBe
    const parsedUrl = Utils.parseUrl('http://localhost:3000/login');
    expect(parsedUrl.href).toBe('http://localhost:3000/login');
    expect(parsedUrl.port).toBe('3000');
    expect(parsedUrl.protocol).toBe('http:');
    // for checking non-primttive values use toEqual
    expect(parsedUrl.query).toEqual({});
  })

  test('parse URL with Query', () => {
    const parsedUrl = Utils.parseUrl('http://localhost:3000/login?user=user&password=password');
    expect(parsedUrl.query).toEqual({ user: 'user', password: 'password' });
  })

  test.skip('test invalid url', () => {
    function expectError(){
      return Utils.parseUrl('');
    }
    expect(expectError).toThrowError();
  })

  test('test invalid url', () => {
    try {
      Utils.parseUrl('');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error).toHaveProperty('message', 'Empty url')
    }
  })
});