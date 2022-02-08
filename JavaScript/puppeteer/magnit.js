/*  Скрипт для проверки навигационного меню сайта magnit.ru.
   - Зависимости Node.js и Puppeteer
   - Скриншоты делаются не дожидаясь полной загрузки
   - Запустить скрипт без головы хрома, убрать атрибуты в launch()
   - Для медленного интернет соединения был убран timeout
*/   

const puppeteer = require('puppeteer');

async function testHeaderMenu(){
	let countTests = 0;
	var nowStart = new Date(),
	    hourStart = nowStart.getHours(),
		minuteStart = nowStart.getMinutes(),
		secondStart = nowStart.getSeconds();
	let start = ''+hourStart+':'+minuteStart+':'+secondStart+'';
    console.log('Запуск теста: '+start+'');	
	console.log('Запуск браузера');
    const browser = await puppeteer.launch({headless: false, slowMo: 100});

    console.log('Создание новой вкладки в браузере');
    const page = await browser.newPage();
	
	console.log('----Тест кнопки "АКЦИИ" в меню хидера----');
	countTests++;

    console.log('Переход на страницу https://magnit.ru');
    await page.goto('https://magnit.ru',{waitUntil: 'load', timeout: 0});
	
	console.log('Проверяем в меню наличие кнопки "АКЦИИ"');
    const promo = await page.$$(".header__nav-item[href='/promo/']");
	if (promo) {
		console.log('Кнопка "АКЦИИ" найдена');
		console.log('Кликаем по кнопке "АКЦИИ"');
		await page.click(".header__nav-item[href='/promo/']");
	}else{
		console.log('Кнопка "АКЦИИ" НЕ найдена, ТЕСТ НЕ ПРОЙДЕН!!!');
	}

	console.log('Проверяем перешли ли мы на странциу с "АКЦИЯми"');
	await page.waitForSelector('.g-main__title');
	const textPromo = await page.$eval('.g-main__title', element => element.textContent);
	if (textPromo.startsWith('Акции')) {
            console.log('УСПЕШНО. ФР соответствует ОР.');
        } else {
              console.log('ТЕСТ НЕ ПРОЙДЕН!!! ФР не соответствует ОР');
              await page.screenshot({path: 'FAIL_magnit_header_menu_promo.png'});
        }

	console.log('Скриншотим страничку "АКЦИИ"');
	await page.screenshot({path: 'PASS_magnit_header_menu_promo.png'});
	
    console.log('----Тест кнопки "ИНТЕРНЕТ-АПТЕКА" в меню хидера----');
	countTests++;

    console.log('Переход на страницу https://magnit.ru');
    await page.goto('https://magnit.ru',{waitUntil: 'load', timeout: 0});

    console.log('Проверяем в меню наличие кнопки "ИНТЕРНЕТ-АПТЕКА"');
    const apteka = await page.$$(".header__nav-item[href='https://apteka.magnit.ru/']");
    if (apteka) {
    	console.log('Кнопка "ИНТЕРНЕТ-АПТЕКА" найдена');
    	console.log('Кликаем по кнопке "ИНТЕРНЕТ-АПТЕКА"');
    	await page.click(".header__nav-item[href='https://apteka.magnit.ru/']");
    }else{
    	console.log('Кнопка "ИНТЕРНЕТ-АПТЕКА" НЕ найдена, ТЕСТ НЕ ПРОЙДЕН!!!');
    }	

    console.log('Проверяем перешли ли мы на странциу с "ИНТЕРНЕТ-АПТЕКи"');
    await page.waitForSelector('.footer__link');
    const pageTitle = await page.title();
	if (pageTitle == 'Магнит-Аптека') {
		console.log('УСПЕШНО. ФР соответствует ОР.');
	}else{
		console.log('ТЕСТ НЕ ПРОЙДЕН!!! ФР не соответствует ОР');
		await page.screenshot({path: 'FAIL_magnit_header_menu_apteka.png'});
	}

    console.log('Скриншотим страничку "ИНТЕРНЕТ-АПТЕКи"');
    await page.screenshot({path: 'PASS_magnit_header_menu_apteka.png'});

    console.log('----Тест кнопки "ПАРТНЕРЫ" в меню хидера----');
	countTests++;

    console.log('Переход на страницу https://magnit.ru');
    await page.goto('https://magnit.ru',{waitUntil: 'load', timeout: 0});
	
	console.log('Проверяем в меню наличие кнопки "ПАРТНЕРЫ"');
    const partner = await page.$$(".header__nav-item[href='/partners/']");
	if (partner) {
		console.log('Кнопка "ПАРТНЕРЫ" найдена');
		console.log('Кликаем по кнопке "ПАРТНЕРЫ"');
		await page.click(".header__nav-item[href='/partners/']");
	}else{
		console.log('Кнопка "ПАРТНЕРЫ" НЕ найдена, ТЕСТ НЕ ПРОЙДЕН!!!');
	}

    console.log('Проверяем перешли ли мы на странциу с "ПАРТНЕРами"');
	await page.waitForSelector('.g-main__title');
	const textPartner = await page.$eval('.g-main__title', element => element.textContent);
	if (textPartner.startsWith('Партнерская')) {
            console.log('УСПЕШНО. ФР соответствует ОР.');
        } else {
              console.log('ТЕСТ НЕ ПРОЙДЕН!!! ФР не соответствует ОР');
              await page.screenshot({path: 'FAIL_magnit_header_menu_partners.png'});
        }

	console.log('Скриншотим страничку "ПАРТНЕРЫ"');
	await page.screenshot({path: 'PASS_magnit_header_menu_partners.png'});

    console.log('----Тест кнопки "ЖУРНАЛ" в меню хидера----');
	countTests++;

    console.log('Переход на страницу https://magnit.ru');
    await page.goto('https://magnit.ru',{waitUntil: 'load', timeout: 0});
	
	console.log('Проверяем в меню наличие кнопки "ЖУРНАЛ"');
    const journal = await page.$$(".header__nav-item[href='/magazine/']");
	if (journal) {
		console.log('Кнопка "ЖУРНАЛ" найдена');
		console.log('Кликаем по кнопке "ЖУРНАЛ"');
		await page.click(".header__nav-item[href='/magazine/']");
	}else{
		console.log('Кнопка "ЖУРНАЛ" НЕ найдена, ТЕСТ НЕ ПРОЙДЕН!!!');
	}

    console.log('Проверяем перешли ли мы на странциу с "ЖУРНАЛом"');
	await page.waitForSelector('.g-main__title');
	const textJournal = await page.title();
	if (textJournal.startsWith('Журнал')) {
            console.log('УСПЕШНО. ФР соответствует ОР.');
        } else {
              console.log('ТЕСТ НЕ ПРОЙДЕН!!! ФР не соответствует ОР');
              await page.screenshot({path: 'FAIL_magnit_header_menu_journals.png'});
        }

	console.log('Скриншотим страничку "ЖУРНАЛ"');
	await page.screenshot({path: 'PASS_magnit_header_menu_journals.png'});

    console.log('----Тест кнопки "КАТАЛОГИ" в меню хидера----');
	countTests++;

    console.log('Переход на страницу https://magnit.ru');
    await page.goto('https://magnit.ru',{waitUntil: 'load', timeout: 0});
	
	console.log('Проверяем в меню наличие кнопки "КАТАЛОГИ');
    const catalog = await page.$$(".header__nav-item[href='/journals/']");
	if (catalog) {
		console.log('Кнопка "КАТАЛОГИ" найдена');
		console.log('Кликаем по кнопке "КАТАЛОГИ');
		await page.click(".header__nav-item[href='/journals/']");
	}else{
		console.log('Кнопка "КАТАЛОГИ" НЕ найдена, ТЕСТ НЕ ПРОЙДЕН!!!');
	}

	console.log('Проверяем перешли ли мы на странциу с "КАТАЛОГами"');
	await page.waitForSelector('.g-main__title');
	const textCatalog = await page.$eval('.g-main__title', element => element.textContent);
	if (textCatalog.startsWith('Каталоги')) {
            console.log('УСПЕШНО. ФР соответствует ОР.');
        } else {
              console.log('ТЕСТ НЕ ПРОЙДЕН!!! ФР не соответствует ОР');
              await page.screenshot({path: 'FAIL_magnit_header_menu_catalogs.png'});
        }

	console.log('Скриншотим страничку "КАТАЛОГИ');
	await page.screenshot({path: 'PASS_magnit_header_menu_catalogs.png'});

    console.log('----Тест кнопки "МАГАЗИНЫ" в меню хидера----');
	countTests++;

    console.log('Переход на страницу https://magnit.ru');
    await page.goto('https://magnit.ru',{waitUntil: 'load', timeout: 0});
	
	console.log('Проверяем в меню наличие кнопки "МАГАЗИНЫ"');
    const magazine = await page.$$(".header__nav-item[href='/shops/']");
	if (magazine) {
		console.log('Кнопка "МАГАЗИНЫ" найдена');
		console.log('Кликаем по кнопке "МАГАЗИНЫ"');
		await page.click(".header__nav-item[href='/shops/']");
	}else{
		console.log('Кнопка "МАГАЗИНЫ" НЕ найдена, ТЕСТ НЕ ПРОЙДЕН!!!');

	}

	console.log('Проверяем перешли ли мы на странциу с "МАГАЗИНами"');
	await page.waitForSelector('.g-main__title');
	const textMagazine = await page.$eval('.g-main__title', element => element.textContent);
	if (textMagazine.startsWith('Адреса')) {
            console.log('УСПЕШНО. ФР соответствует ОР.');
        } else {
              console.log('ТЕСТ НЕ ПРОЙДЕН!!! ФР не соответствует ОР');
              await page.screenshot({path: 'FAIL_magnit_header_menu_magazine.png'});
        }

	console.log('Скриншотим страничку "МАГАЗИНЫ"');
	await page.screenshot({path: 'PASS_magnit_header_menu_magazine.png'});

    console.log('----Тест кнопки "РАБОТА" в меню хидера----');
	countTests++;

    console.log('Переход на страницу https://magnit.ru');
    await page.goto('https://magnit.ru',{waitUntil: 'load', timeout: 0});
	
	console.log('Проверяем в меню наличие кнопки "РАБОТА"');
    const vacant = await page.$$(".header__nav-item[href='https://rabota.magnit.ru/?utm_source=magnit.ru&utm_medium=site&utm_campaign=intsource']");
	if (vacant) {
		console.log('Кнопка "РАБОТА" найдена');
		console.log('Кликаем по кнопке "РАБОТА"');
		await page.click(".header__nav-item[href='https://rabota.magnit.ru/?utm_source=magnit.ru&utm_medium=site&utm_campaign=intsource']");
	}else{
		console.log('Кнопка "МАГАЗИНЫ" НЕ найдена, ТЕСТ НЕ ПРОЙДЕН!!!');
	}

	console.log('Проверяем перешли ли мы на странциу с "РАБОТой"');
	await page.waitForSelector('.preview-form__title');
	const textVacant = await page.$eval('.preview-form__title', element => element.textContent);
	if (textVacant.startsWith('Работа')) {
            console.log('УСПЕШНО. ФР соответствует ОР.');
        } else {
              console.log('ТЕСТ НЕ ПРОЙДЕН!!! ФР не соответствует ОР');
              await page.screenshot({path: 'FAIL_magnit_header_menu_vacant.png'});
        }

	console.log('Скриншотим страничку "МАГАЗИНЫ"');
	await page.screenshot({path: 'PASS_magnit_header_menu_vacant.png'});
	
	var nowFinish = new Date(),
	    hourFinish = nowFinish.getHours(),
		minuteFinish = nowFinish.getMinutes(),
		secondFinish = nowFinish.getSeconds();
	let finish = ''+hourFinish+':'+minuteFinish+':'+secondFinish+'';
	
	console.log('ТЕСТЫ ЗАВЕРШЕНЫ!!!');
	console.log('Конец теста: '+finish+'');
	console.log('Всего тестов: '+countTests+' ');
    console.log('Закрытие браузера');
    await browser.close();
}

testHeaderMenu();