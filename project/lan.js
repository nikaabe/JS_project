var toggleButton = document.querySelector('.LanCube')
var Text_1 = document.getElementById('text_1')
var Text_2 = document.getElementById('text_2')
var Text_3 = document.getElementById('text_3')
var Text_4 = document.getElementById('text_4')
var Text_5 = document.getElementById('text_5')
var Text_6 = document.getElementById('text_6')
var Text_7 = document.getElementById('text_7')
var Text_8 = document.getElementById('text_8')
var Text_9 = document.getElementById('text_9')
var Text_10 = document.getElementById('text_10')
var Text_11 = document.getElementById('text_11')
var Text_12 = document.getElementById('text_12')
var Text_13 = document.getElementById('text_13')
var Text_14 = document.getElementById('text_14')
var Text_15 = document.getElementById('text_15')
var Text_16 = document.getElementById('text_16')
var Text_17 = document.getElementById('text_17')
var Text_18 = document.getElementById('text_18')
var Text_19 = document.getElementById('text_19')
var Text_20 = document.getElementById('text_20')
var Text_21= document.getElementById('text_21')
var Text_22 = document.getElementById('text_22')
var Text_23 = document.getElementById('text_23')
var Text_24= document.getElementById('text_24')
var Text_25= document.getElementById('text_25')
var Text_26= document.getElementById('text_26')
var Text_27= document.getElementById('text_27')
var Text_28= document.getElementById('text_28')


function changeLanguage(language) {
    const translation = translate[language];
    Text_1.textContent = translation.text_1;
    Text_2.textContent = translation.text_2;
    Text_3.textContent = translation.text_3;
    Text_4.textContent = translation.text_4;
    Text_5.textContent = translation.text_5;
    Text_6.textContent = translation.text_6;
    Text_7.textContent = translation.text_7;
    Text_8.textContent = translation.text_8;
    Text_9.textContent = translation.text_9;
    Text_10.textContent = translation.text_10;
    Text_11.textContent = translation.text_11;
    Text_12.textContent = translation.text_12;
    Text_13.textContent = translation.text_13;
    Text_14.textContent = translation.text_14;
    Text_15.textContent = translation.text_15;
    Text_16.textContent = translation.text_16;
    Text_17.textContent = translation.text_17;
    Text_18.textContent = translation.text_18;
    Text_19.textContent = translation.text_19;
    Text_20.textContent = translation.text_20;
    Text_21.textContent = translation.text_21;
    Text_22.textContent = translation.text_22;
    Text_23.textContent = translation.text_23;
    Text_24.textContent = translation.text_24;
    Text_25.textContent = translation.text_25;
    Text_26.textContent = translation.text_26;
    Text_27.textContent = translation.text_27;
    Text_28.textContent = translation.text_28;
}



const translate = {
    "ge":{
        "text_1": "ბლოგი",
        "text_2": "ლიტ.ორატორი",
        "text_3": "ავტორები",
        "text_4": "კონტაქტი",
        "text_5": "წიგნები",
        "text_6": "აქსესუარები",
        "text_7": "სასკოლო",
        "text_8": "სათამაშოები",
        "text_9": "საწერი/სახატავი",
        "text_10": "სასკოლო პროდუქცია",
        "text_11": "დანაშაული და სასჯელი",
        "text_12": "ჩემი პირველი ლექსები",
        "text_13": "ქართული მართლწერა",
        "text_14": "საგზაო ნიშნები და საგამოცდო ბილეთები",
        "text_15": "რატომ კვდებიან კუპიდონები",
        "text_16": "ეს მე ვარ, ვინი პუჰი",
        "text_17": "ჯაყოს ხიზნები",
        "text_18": "დოგმენი რწყილთა ბატონი",
        "text_19": "მოთამაშე",
        "text_20": "საყმაწვილო უნივერსალური ენციკლოპედია",
        "text_21": "იგავ არაკები",
        "text_22": "სალამურას თავგადასავალი",
        "text_23": "პატარა პრინცი",
        "text_24": "ფრანით მორბენალი",
        "text_25": "დაგვეკონტაქტეთ - ბლაბლაბლა",
        "text_26": "ტელეფონი: +123 456 789",
        "text_27": "ფილიალი: მურმან ღობეყორეგლეჯიაშვილის ქუჩა, თბილისი",
        "text_28": "მეინ"
    },

    "en":{
        "text_1": "Blog",
        "text_2": "Lit. Orator",
        "text_3": "Authors",
        "text_4": "Contact",
        "text_5": "Books",
        "text_6": "Accessories",
        "text_7": "School",
        "text_8": "Toys",
        "text_9": "Writing/Drawing",
        "text_10": "School Products",
        "text_11": "Crime and Punishment",
        "text_12": "My First Poems",
        "text_13": "Georgian Orthography",
        "text_14": "Road Signs and Exam Tickets",
        "text_15": "Why Cupids Die",
        "text_16": "It's Me, Winnie the Pooh",
        "text_17": "Jaqo's Guests",
        "text_18": "Dogman: Lord of the Fleas",
        "text_19": "The Gambler",
        "text_20": "Children's Universal Encyclopedia",
        "text_21": "Fables and Parables",
        "text_22": "Salamura's Adventure",
        "text_23": "The Little Prince",
        "text_24": "The Kite Runner",
        "text_25": "Contact Us - Blah Blah Blah",
        "text_26": "Phone: +123 456 789",
        "text_27": "Branch: Murman Ghobeghoreglije Street, Tbilisi",
        "text_28": "Main"
    }
}




toggleButton.addEventListener('click', (event) => {
    const ena = event.target.dataset.ena;
    if (ena) {
        changeLanguage(ena);
    } 
});
