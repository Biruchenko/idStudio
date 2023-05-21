// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";
//======================================================================================
// Animation
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	setTimeout(() => {
		animOnScroll();
	}, 300);
}
//======================================================================================
// Переклад сайту
const langArr = {
	"link-header1": {
		"ua": "Послуги",
		"en": "Services",
	},
	"link-header2": {
		"ua": "Портфоліо",
		"en": "Portfolio",
	},
	"link-header3": {
		"ua": "Тарифи",
		"en": "Pricing",
	},
	"main-title": {
		"ua": "Ми створюємо ваш простір кращим",
		"en": "We create your space better",
	},
	"main-text": {
		"ua": "Наша команда створює комфортні простори для наших клієнтів. Ми проектуємо ваше повсякденне життя і працюємо над чудовими ідеями з 1999 року.",
		"en": "Our team creates comfortable spaces for our clients. We’ve been designing your everyday life and work through great ideas since 1999.",
	},
	"main-button": {
		"ua": "Розпочати",
		"en": "Get started",
	},
	"about-title": {
		"ua": "Про <span>Studio</span>",
		"en": "About <span>Studio</span>",
	},
	"about-text1": {
		"ua": "Interiart - це відзначена нагородами практика архітектури та дизайну інтер'єру, що була створена в Нью-Йорку. Ми працюємо на міжнародному рівні над проектами дизайну житлових та комерційних інтер'єрів, що вимагають творчого підходу. Наші талановиті та досвідчені дизайнери використовують свої знання та досвід для створення унікальних та комфортних інтер'єрів для вас.",
		"en": "Interiart is an award-winning architecture and interior design practice based in NYC. We work internationally on projects of residential & commercial interior design that require a creative approach. Our talented and experienced designers leverage their knowledge and expertise to create unique and comfortable interiors for you.",
	},
	"about-text2": {
		"ua": "Наша команда знає, що дизайн інтер'єру може бути стресом для клієнта, і ми робимо все можливе, щоб зробити його якомога легшим. Ми вислуховуємо ваші потреби, ідеї та побажання. І найголовніше, ми робимо це захоплюючим і приємним для наших клієнтів.",
		"en": "Our team knows that interior design can be stressful for the client and we do our best to make it as easy as possible. We listen to your needs, ideas, and inputs. And most importantly, we make it exciting and enjoyable for our clients.",
	},
	"services-title": {
		"ua": "Наші <span>Послуги</span>",
		"en": "Our <span>Services</span>",
	},
	"item-services-title1": {
		"ua": "Дизайн інтер'єру",
		"en": "INTERIOR DESIGN",
	},
	"item-services-text1": {
		"ua": "Послуги з дизайну інтер'єру пропонують широкий спектр рішень для будинків і офісів наших клієнтів.",
		"en": "Interior design services offer a vast variety of solutions for our clients homes and offices.",
	},
	"item-services-title2": {
		"ua": "Послуги з декору",
		"en": "DECORATIVE SERVICES",
	},
	"item-services-text2": {
		"ua": "Наші професійні декоратори з радістю допоможуть вам змінити внутрішній вигляд вашого будинку.",
		"en": "Our professional decorators will be happy to help you change your house’s inner look.",
	},
	"item-services-title3": {
		"ua": "ПЛАНУВАННЯ ПРОСТОРУ",
		"en": "SPACE PLANNING",
	},
	"item-services-text3": {
		"ua": "Ми створюємо кращі інтер'єри завдяки нашим послугам з планування простору.",
		"en": "We create better interior experiences through our space planning services.",
	},
	"item-services-title4": {
		"ua": "Проджект менеджмент",
		"en": "PROJECT MANAGEMENT",
	},
	"item-services-text4": {
		"ua": "Ми забезпечуємо належне управління проектами, оскільки це один з головних факторів успіху в дизайні інтер'єру.",
		"en": "We provide proper project management as it’s one of the main success factors in interior design.",
	},
	"services-button": {
		"ua": "Безкоштовна консультація",
		"en": "Free consultation",
	},
	"portfolio-title": {
		"ua": "Нашe <span>Портфоліо</span>",
		"en": "Our <span>Portfolio</span>",
	},
	"tabs-portfolio-title1": {
		"ua": "усі",
		"en": "All",
	},
	"tabs-portfolio-title2": {
		"ua": "комерційні",
		"en": "comercial",
	},
	"tabs-portfolio-title3": {
		"ua": "приватні",
		"en": "residential",
	},
	"tabs-portfolio-title4": {
		"ua": "офісні",
		"en": "office",
	},
	"tabs-portfolio-title5": {
		"ua": "інші",
		"en": "other",
	},
	"tabs-portfolio-link": {
		"ua": "дивитись більше",
		"en": "view more",
	},
	"pricing-title": {
		"ua": "Наші <span>тарифи</span>",
		"en": "Our <span>Pricing</span>",
	},
	"item-pricing-title1": {
		"ua": "базовий",
		"en": "basic",
	},
	"item-pricing-title2": {
		"ua": "стандартний",
		"en": "standart",
	},
	"item-pricing-title3": {
		"ua": "преміум",
		"en": "premium",
	},
	"pricing-label": {
		"ua": "на місяць",
		"en": "per month",
	},
	"pricing-label2": {
		"ua": "на місяць",
		"en": "per month",
	},
	"pricing-label3": {
		"ua": "на місяць",
		"en": "per month",
	},
	"pricing-button1": {
		"ua": "придбати",
		"en": "buy now",
	},
	"pricing-button2": {
		"ua": "придбати",
		"en": "buy now",
	},
	"pricing-button3": {
		"ua": "придбати",
		"en": "buy now",
	},
	"pricing-text11": {
		"ua": "дизайн інтер'єру",
		"en": "interio design",
	},
	"pricing-text12": {
		"ua": "обговорення проекту",
		"en": "project discussion",
	},
	"pricing-text13": {
		"ua": "планування простору",
		"en": "space planning",
	},
	"pricing-text14": {
		"ua": "онлайн консультація",
		"en": "online consultation",
	},
	"pricing-text21": {
		"ua": "підбір кольору",
		"en": "color analysis",
	},
	"pricing-text22": {
		"ua": "планування простору",
		"en": "space planning",
	},
	"pricing-text23": {
		"ua": "перепланування будинку",
		"en": "home remodeling",
	},
	"pricing-text24": {
		"ua": "3d модель інтер'єру",
		"en": "3d interio model",
	},
	"pricing-text31": {
		"ua": "коцептуальна розробка",
		"en": "concept development",
	},
	"pricing-text32": {
		"ua": "послуги з декору",
		"en": "decoration services",
	},
	"pricing-text33": {
		"ua": "архітектура інтер'єру",
		"en": "interio architecture",
	},
	"pricing-text34": {
		"ua": "встановлення підлоги",
		"en": "flooring installation",
	},
	"testimonials-title": {
		"ua": "Відгуки <span>наших користувачів</span>",
		"en": "what <span>people say</span>",
	},
	"author-name1": {
		"ua": "Анет Блек",
		"en": "Annette Black",
	},
	"author-name2": {
		"ua": "Анет Блек",
		"en": "Annette Black",
	},
	"author-profession1": {
		"ua": "Асистент з мерчандайзингу",
		"en": "Merchandising Associate",
	},
	"author-profession2": {
		"ua": "Асистент з мерчандайзингу",
		"en": "Merchandising Associate",
	},
	"author-name3": {
		"ua": "Марвін МакКіні",
		"en": "Marvin McKinney",
	},
	"author-name4": {
		"ua": "Марвін МакКіні",
		"en": "Marvin McKinney",
	},
	"author-profession3": {
		"ua": "Адміністратор",
		"en": "Administrator",
	},
	"author-profession4": {
		"ua": "Адміністратор",
		"en": "Administrator",
	},
	"consultation-title": {
		"ua": "Чи є <br> <span>у вас запитання?</span>",
		"en": "Do you have <br> <span>any question?</span>",
	},
	"consultation-button": {
		"ua": "замовити дзвінок",
		"en": "order a call",
	},
	"footer-text": {
		"ua": "Ми є однією з провідних студій дизайну інтер'єру та реконструкції, яка може задовольнити всі ваші потреби в дизайні приватного та комерційного інтер'єру.",
		"en": "We are one of the leading interior design and remodeling studios available for all of your residential and commercial interior design needs.",
	},
	"navigation-title": {
		"ua": "навігація",
		"en": "navigation",
	},
	"navigation-link1": {
		"ua": "Про нас",
		"en": "About",
	},
	"navigation-link2": {
		"ua": "Послуги",
		"en": "Services",
	},
	"navigation-link3": {
		"ua": "Портфоліо",
		"en": "Portfolio",
	},
	"navigation-link4": {
		"ua": "Тарифи",
		"en": "Pricing",
	},
	"navigation-link5": {
		"ua": "Відгуки",
		"en": "Тestimonials",
	},
	"contacts-title": {
		"ua": "контакти",
		"en": "contacts",
	},
	"item-contacts-footer-title1": {
		"ua": "адреса",
		"en": "adress",
	},
	"item-contacts-footer-title2": {
		"ua": "телефони",
		"en": "phones",
	},
	"item-contacts-option": {
		"ua": "або",
		"en": "or",
	},
}
const select = document.querySelector('select');
const allLang = ['en', 'ua'];

select.addEventListener('change', changeURLLanguage);

// перенаправить на url с указанием языка
function changeURLLanguage() {
	let lang = select.value;
	location.href = window.location.pathname + '#' + lang;
	location.reload();
}

function changeLanguage() {
	let hash = window.location.hash;
	hash = hash.substr(1);
	console.log(hash);
	if (!allLang.includes(hash)) {
		location.href = window.location.pathname + '#en';
		location.reload();
	}
	select.value = hash;
	// document.querySelector('title').innerHTML = langArr['unit'][hash];
	// document.querySelector('.lng-chip').innerHTML = langArr['chip'][hash];
	for (let key in langArr) {
		let elem = document.querySelector('.lng-' + key);
		if (elem) {
			elem.innerHTML = langArr[key][hash];
		}

	}
}

changeLanguage();