<?php

return [
    'name' => [
        'max' => 'Поле "Имя" должно содержать не более 30 символов',
    ],
    'email' => [
        'email' => 'Поле "E-mail" должно быть корректным е-мейлом',
        'max' => 'Поле "E-mail" должно содержать не более 129 символов',
    ],
    'phone' => [
        'max' => 'Поле "Телефон" должно содержать не более 16 символов',
    ],
    'title' => [
        'required' => 'Поле "Заголовок" обязательно для заполнения',
        'max' => 'Поле "Заголовок" должно содержать не более 120 символов',
    ],
    'message' => [
        'required' => 'Поле "Сообщение" обязательно для заполнения',
        'max' => 'Поле "Сообщение" должно содержать не более 700 символов',
    ],
];
