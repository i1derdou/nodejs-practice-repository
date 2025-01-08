/**
 * Author: David Clemens
 * Date: 2024-01-07
 * File: toFahrenheit.js
 * Description: Convert Celsius to Fahrenheit.
 */

'use strict';

/**
 * Converts a temperature from Celsius to Fahrenheit.
 * @param {number} celsius - The temperature in Celsius.
 * @returns {number} - The temperature in Fahrenheit.
 */

function toFahrenheit(celsius) {
  // Formula for converting Celsius to Fahrenheit: (Celsius × 9/5) + 32
  return (celsius * 9) / 5 + 32;
}

// Export the toFahrenheit function to make it available for use in other files.
module.exports = { toFahrenheit };