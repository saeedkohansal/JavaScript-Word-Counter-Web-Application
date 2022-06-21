/*
• Word matching
REGEX PATTERN: /[\w]+/gi
• Match only english words
REGEX PATTERN: /([^\u0000-\u007F]|\w)+/gi
• Match english or non-english words
*/

// Define variables
const textarea = document.getElementById("textarea")
const words_element = document.getElementById("word_counter")
const characters_element = document.getElementById("character_counter")
const lines_element = document.getElementById("line_counter")
const clear_button_element = document.getElementById("clear_button")

// Word counter function
function word_counter() {
    // Word detection
    const regex_pattern = /([^\u0000-\u007F]|\w)+/gi
    const word_checker = textarea.value.match(regex_pattern)
    // When one or more words detected
    if (word_checker !== null) {
        // Counting Words
        const total_words = word_checker.length;
        // Display words count
        if (total_words > 1) {
            // Display plural count
            words_element.innerHTML = "Words: " + total_words
        } else {
            // Display singular count
            words_element.innerHTML = "Word: " + total_words
        }
    } else {
        // When no word detected
        words_element.innerHTML = "Word: 0"
    }
}

// Character counter function
function character_counter() {
    // Counting Characters
    const total_characters = textarea.value.length
    // Display characters count
    if (total_characters > 1) {
        // Display plural count
        characters_element.innerHTML = "Characters: " + total_characters
    } else {
        // Display singular count
        characters_element.innerHTML = "Character: " + total_characters
    }
}

// Line counter function
function line_counter() {
    // Line detection
    const regex_pattern = /\r?\n|\r/g
    const line_checker = textarea.value.match(regex_pattern)
    // When one or more lines detected
    if (line_checker !== null) {
        // Counting lines
        const total_lines = line_checker.length + 1;
        // Display lines count
        if (total_lines > 1) {
            // Display plural count
            lines_element.innerHTML = "Lines: " + total_lines
        } else {
            // Display singular count
            lines_element.innerHTML = "Line: " + total_lines
        }
    } else {
        // When no line detected
        lines_element.innerHTML = "Line: 1"
    }
}

// Clear textarea function
function clear_textarea() {
    // Empty the textarea element value
    textarea.value = ""
    // Update word count to zero
    words_element.innerHTML = "Word: 0"
    // Update character count to zero
    characters_element.innerHTML = "Character: 0"
    // Update line count to zero
    lines_element.innerHTML = "Line: 1"
}

// When the input data changed
textarea.oninput = function () {
    // Call word counter function
    word_counter()
    // Call character counter function
    character_counter()
    // Call line counter function
    line_counter()
}

// When the clear button clicked
clear_button_element.onclick = function () {
    // Call clear textarea function
    clear_textarea()
}