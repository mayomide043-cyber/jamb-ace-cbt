// All questions below are ORIGINAL PRACTICE questions (not official JAMB items).
const S = { type:'Original practice question', year:null, verified:false }
export const sampleQuestions = [
 {id:1,subject:'maths',topic:'Algebra',difficulty:'Easy',q:'If 2x + 3 = 11, what is x?',o:['3','4','5','7'],a:1,e:'Subtract 3 from both sides to get 2x = 8, so x = 4.'},
 {id:2,subject:'maths',topic:'Logarithms',difficulty:'Medium',q:'Evaluate log base 2 of 8.',o:['2','4','3','8'],a:2,e:'2 cubed is 8, so log base 2 of 8 is 3.'},
 {id:3,subject:'english',topic:'Lexis and Structure',difficulty:'Easy',q:'Choose the word opposite in meaning to "benevolent".',o:['Kind','Malevolent','Generous','Gentle'],a:1,e:'Benevolent means well-meaning; malevolent means wishing harm.'},
 {id:4,subject:'physics',topic:'Units and Measurement',difficulty:'Easy',q:'What is the SI unit of force?',o:['Joule','Watt','Pascal','Newton'],a:3,e:'Force is measured in newtons (N), where 1 N = 1 kg·m/s².'},
 {id:5,subject:'chemistry',topic:'Atomic Structure',difficulty:'Easy',q:'What is the atomic number of carbon?',o:['6','12','8','14'],a:0,e:'Carbon has 6 protons, so its atomic number is 6.'},
 {id:6,subject:'biology',topic:'Cell Biology',difficulty:'Easy',q:'Which organelle is the main site of aerobic respiration?',o:['Ribosome','Mitochondrion','Nucleus','Golgi body'],a:1,e:'Mitochondria release most of the cell\'s ATP through aerobic respiration.'},
].map(x=>({...x,...S}))
