<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class City extends Model
{
    protected $table = 'cities';

    public function messages()
    {
        return $this->hasMany('App\Message');
    }

    static public $cities = [
        'Москва',
        'Санкт-Петербург',
        'Минск',
        'Киев',
        'Казахстан',
        'Абакан',
        'Австралия и Нов. Зеландия',
        'Австрия',
        'Азербайджан',
        'Анадырь',
        'Армения',
        'Архангельск',
        'Астрахань',
        'Барнаул',
        'Белгород',
        'Бенилюкс',
        'Биробиджан',
        'Благовещенск',
        'Болгария',
        'Брест',
        'Брянск',
        'Великобритания',
        'Венгрия',
        'Винница',
        'Витебск',
        'Владивосток',
        'Владикавказ',
        'Владимир',
        'Волгоград',
        'Вологда',
        'Воронеж',
        'Германия',
        'Гомель',
        'Горно-Алтайск',
        'Греция',
        'Гродно',
        'Грозный',
        'Грузия',
        'Днепр',
        'Донецк',
        'Дубаи (ОАЭ)',
        'Египет',
        'Екатеринбург',
        'Житомир',
        'Запорожье',
        'Иваново',
        'Ивано-Франковск',
        'Ижевск',
        'Израиль',
        'Индия',
        'Иркутск',
        'Ирландия',
        'Испания и Португалия',
        'Италия',
        'Йошкар-Ола',
        'Казань',
        'Калининград',
        'Калуга',
        'Канада',
        'Кемерово',
        'Кипр',
        'Киргизия',
        'Киров',
        'Китай',
        'Кострома',
        'Краснодар',
        'Красноярск',
        'Кропивницкий',
        'Крым',
        'Курган',
        'Курск',
        'Кызыл',
        'Латвия',
        'Латинская Америка',
        'Липецк',
        'Литва',
        'Луганск',
        'Луцк',
        'Львов',
        'Магадан',
        'Майкоп',
        'Махачкала',
        'Могилёв',
        'Молдова',
        'Мурманск',
        'Назрань',
        'Нижневартовск',
        'Нижний Новгород',
        'Николаев',
        'Новгород Великий',
        'Новосибирск',
        'Одесса',
        'Омск',
        'Оренбург',
        'Орёл',
        'Пенза',
        'Пермь',
        'Петрозаводск',
        'Петропавловск-Камчатский',
        'Полтава',
        'Польша',
        'Псков',
        'Ровно',
        'Ростов на Дону',
        'Румыния',
        'Рязань',
        'Салехард',
        'Самара',
        'Саранск',
        'Саратов',
        'Северная Европа (Скандинавия)',
        'Словакия',
        'Смоленск',
        'Сочи',
        'Ставрополь',
        'Сумы',
        'США',
        'Сыктывкар',
        'Таджикистан',
        'Таиланд',
        'Тамбов',
        'Тверь',
        'Тернополь',
        'Тольятти',
        'Томск',
        'Тула',
        'Тунис',
        'Туркменистан',
        'Турция',
        'Тюмень',
        'Ужгород',
        'Узбекистан',
        'Улан-Удэ',
        'Ульяновск',
        'Уссурийск',
        'Уфа',
        'Франция',
        'Хабаровск',
        'Ханты-Мансийск',
        'Харьков',
        'Хмельницкий',
        'Чебоксары',
        'Челябинск',
        'Черкассы',
        'Черкесск',
        'Чернигов',
        'Черновцы',
        'Чехия',
        'Чита',
        'Швейцария',
        'Элиста',
        'Эстония',
        'ЮАР',
        'Южно-Сахалинск',
        'Якутск',
        'Япония и Корея',
        'Ярославль',
        ];
}
