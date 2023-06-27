<template>
  <container class="add_page mx-5">
    <div class="add_page-header fs-3 text-center mb-3 text-warning">Общая информация</div>
    <ul>
      <li style="font-size: 24px">
        !!!! Если поле или данный сервис не нужен. То надо проставить 1 в
        строках !!!!
      </li>
    </ul>
    <div class="add_page-header fs-3 text-center mb-3 text-warning">Подключение Callibri</div>
    <ul>
      <li>
        1ый шаг заходим в личный кабинет и нажимаем на кнопку получить доступ к API
      </li>
      <li>
        На почту приходит такое письмо (рисунок ниже), там в 1 строчке почта и в
        другой api эти данные заносятся при добавление проекта
      </li>
      <img style="" class="img1 img-fluid" src="../images/callibri_1.png" alt="image" />
      <li>
        Далее получим site_id. Заходим в любой из проектов и в ссылке видим
        цифры. Копируем их и вставляем. (рисунок ниже)
      </li>
      <img style="" class="img1 img-fluid" src="../images/callibri_2.png" alt="2" />
      <li>Поздравляю вы добавили Callibri</li>
    </ul>
    <div class="add_page-header fs-3 text-center mb-3 text-warning">Подключение VK</div>
    <ul>
      <li>
        Ключ oath
        <input
          value="vk1.a.njvSBulI6DeSD9xCE-YZXWCu0KpSOJ4bYVl0Mr2FMG7XbnRx_-V_4hvCQrux48GC-0-W90JlevmDCSxhQ5rOYl0y30XGFifQqWkV3OIjuLTE8hckwY0jCi0YFLa8kykWGl3NBVP4aNOTO610i74vnPuw2ZxLEr8U3RYhMCaWgY-zEIsWDhuoPBOiUK5AGdRho71f63WN0hflMyBAw_h88A"
        />
      </li>
      <li>
        Id рекламного кабинете получается в реклама > настройки > Номер
        кабинета. Эти цифры и есть его id
      </li>
      <li>
        Id клиента берется так. Клиенты > в название клиента есть id. Пример как
        выглядит id представлен на рисунке ниже
      </li>
      <img style="" class="img1 img-fluid" src="../images/vk_1.png" alt="3" />
    </ul>

    <div class="add_page-header fs-3 text-center mb-3 text-warning">Подключение Topvisor</div>
    <ul>
      <li>Перейдите в Настройки аккаунта</li>
      <li>Создайте новый ключ API или используйте уже готовый</li>
      <img style="" class="img1 img-fluid" src="../images/topvisor_1.png" alt="4" />
      <li>Id пользователя так же берется в настройках аккаунта</li>
      <img style="" class="img1 img-fluid" src="../images/topvisor_2.png" alt="5" />
      <li>Как получить проект id показанно на рисунке ниже</li>
      <img style="" class="img1 img-fluid" src="../images/topvisor_3.png" alt="" />
      <li>
        Как получить проект id региона показанно на рисунке ниже. Id красноярска
        87, томска 93
      </li>
      <img style="" class="img1 img-fluid" src="../images/topvisor_5.png" alt="" />
      <li>Название группы берется из списка групп</li>
      <img style="" class="img1 img-fluid" src="../images/topvisor_4.png" alt="" />
    </ul>
    <div class="add_page-header">Яндекс пример заявку в директ</div>
    <ul>
      <img style="" class="img1 img-fluid" src="../images/direct_example-1.png" alt="" />
      <img style="" class="img1 img-fluid" src="../images/direct_example-2.png" alt="" />
    </ul>
    <div class="add_page-header">Подключение Яндекса</div>
    <ul>
      <li>
        ПРИМЕР ВВОДА ЦЕЛЕЙ МЕТРИКИ!!! | (id счётчика): (id цели этого счётчика),
        (id цели этого счётчика)- (id счётчика): (id цели этого счётчика), (id
        цели этого счётчика), (id цели этого счётчика) | Или пример в цифрах
        90597260: 268563597, 264612165, 264612191- 90597260: 268563597
      </li>
      <li>
        Для начала надо создать приложение для аккаунда директ. Для этого идём
        <a style="color: blue" href="https://oauth.yandex.ru/client/new"
          >Сюда</a
        >
      </li>
      <li>
        Заполняем все поля самостоятельно. Только Для какой платформы нужно
        приложение? * выбираем Веб-сервисы и нажимаем на кнопку 'Подставить URL
        для разработки'
      </li>
      <li>Так же отмечаем галочками ниже direct и metrika</li>
      <li>Проверить себя можно по доступам справа. Смотреть картинку ниже</li>
      <img style="" class="img1 img-fluid" src="../images/direct-1.png" alt="" />
      <li>Вот мы и получили ClientID</li>
      <img style="" class="img1 img-fluid" src="../images/direct-2.png" alt="" />
      <li>Далее зарегестрируем данное приложение</li>
      <li>
        Идём на страницу создания заявок. Инструменты > API > Мои заявки > новая
        заявка
      </li>
      <img style="" class="img1 img-fluid" src="../images/direct-3.png" alt="" />
      <li>Там выбираем полный доступ.</li>
      <li>
        Выбираем созданое приложение, в Введите application_id или выберите из
        списка*
      </li>

      <img style="" class="img1 img-fluid" src="../images/direct-4.png" alt="" />
      <li>Когда заявка создана и одобренна получим токен авторизации</li>
      <li>Получаем токена авторизации. Для этого укажите здесь ClientID</li>
      <input
        class="clientid_direct"
        type="text"
        name="clientid_direct"
        placeholder="ClientID"
      />
      <div class="get_oath">Перейти на страницу получения токена</div>

      <li>Введем полученный ключ api</li>
      <li>Введем login пользователя</li>
      <li>Где id компании ставим 1</li>
      <li>Цели указываем свои</li>

      <div class="col-5 mt-2">
        <button
          class="btn btns btn-secondary link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover"
          type="button"
        >
          <a class="text-light" href="/add">Назад</a>
        </button>
      </div>
    </ul>
  </container>
</template>
  