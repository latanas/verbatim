import VerbGroupDetector from './verb_group_detector'

let verb = "parler";
let detector = new VerbGroupDetector(verb);
let conjugation = detector.getGroupAlgorithm().getVerbConjugation(verb);

console.log(conjugation);
