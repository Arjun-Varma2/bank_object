const Bank = require('./bank');

describe('Bank', () => {
  let bank;

  beforeEach(() => {
    bank = new Bank(100); // Initial balance of 100 for testing
  });

  test('deposit', () => {
    bank.deposit(50);
    expect(bank.checkBalance()).toBe(150);
  });

  test('withdraw', () => {
    bank.withdraw(50);
    expect(bank.checkBalance()).toBe(50);
  });

  test('checkBalance', () => {
    expect(bank.checkBalance()).toBe(100);
  });

  test('withdraw with insufficient funds', () => {
    expect(() => bank.withdraw(200)).toThrow('Insufficient funds.');
  });

});
