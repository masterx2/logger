/**
 * Created by masterx2 on 4/15/17.
 */

/**
 * Инициализация логгера
 *  - app_key: Ключ приложения, разделения статистики
 *  - server: Упла где находится точка сбора логов
 */
var logger = new Logger.default({
    appKey: 'some_id',
    server: 'http://logger.local'
});

window.addEventListener('load', function () {
    var button = document.querySelector('#log');
    button.addEventListener('click', function (e) {
        logEvent();
    })
});

function logEvent() {
    /**
     * Есть мнение что ответ от сервера нам не нужен
     * ну только если `Ok, записано` =), но для дебага
     * пока что будем парсить ответ
     */
    logger.log({
        some: 'data',
        time: new Date().getTime()
    }).then(function (data) {
        return data.json();
    }).then(function (data) {
        console.log(data);
    })
}
