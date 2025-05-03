/**
 * 
 * @param {The word which is given as input ias expected to be guessed}
 * 
 * orignal word
 * @param {letters which is passed by the user already} 
 * Ex : orignalWord :HUMBLE
 * 
 * guessed letter ['H' ,'M' ,'E']
 * 
 * RETURN -> H_M__E
 */

export function getMaskedString(orignalWord,guessedLetters){
    guessedLetters =  guessedLetters.map(letter =>letter.toUppercase());
    //['h','m','e']->['H' ,'M' ,'E']

    const guessedLetterSet = new Set(guessedLetters);

    const result = orignalWord.toUppercase().split('').map(char =>{
        if(guessedLetterSet.has(char)){
            return char;
        }
        else {
            return "_";
        }
    }); // ['H', '_', 'M', '_', '_', 'E']
    return result ;


}