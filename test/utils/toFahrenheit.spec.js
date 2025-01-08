/**
 * Author: David Clemens
 * Date: 2024-01-07
 * File: toFahrenheit.spec.js
 * Description: This script tests converting Celsius to Fahrenheit.
 */

'use strict';

// Import the toFahrenheit function from the toFahrenheit.js file to test its functionality.
const { toFahrenheit } = require('../../src/utils/toFahrenheit');

// Test suite for the "Fahrenheit Function".
describe('Fahrenheit Function', () => {

  // Test case: Convert 0°C to Fahrenheit. Expected result is 32°F.
  test('converts 0°C to 32°F', () => {
    expect(toFahrenheit(0)).toBe(32); // Check if the output is 32.
  });

  // Test case: Convert 100°C to Fahrenheit. Expected result is 212°F.
  test('converts 100°C to 212°F', () => {
    expect(toFahrenheit(100)).toBe(212); // Check if the output is 212.
  });

  // Test case: Convert -40°C to Fahrenheit. Expected result is -40°F.
  test('converts -40°C to -40°F', () => {
    expect(toFahrenheit(-40)).toBe(-40); // Check if the output is -40.
  });

});