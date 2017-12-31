  # Строение еврейского календаря

## Введение

В данных статьях будет поэтапно разъяснен еврейский календарь,
опираясь только на "Законы освящения месяца" Рамбама.

Всем известно, что существует множество видов календарей и в основном они делятся на 3 вида:

1. Солнечные, основанные на тропическом годе
2. Лунные, основанные на фазах луны
3. Лунно-солнечные, основанные на движении обоих светил

Еврейский календарь принадлежит к последней группе, являясь лунно-солнечным. В нем применена система 19 летнего цикла, в котором 12 обычных лет и 7 високосных.
В високосном году добавляться 13-ый месяц - `Адар бет`, таким образом происходит уравнивание сезонов года с лунными месяцами.

Список месяцев:
1. Тишрей
2. Хешван
3. Кислев
4. Тевет
5. Шват
6. Адар
7. Нисан
8. Ияр
9. Сиван
10. Тамуз
11. Ав
12. Элул

### Почему добавляется именно адар бет, а не элул бет?

```
Это все из-за праздника Песах, который проходит с 15-22 нисана, и этот праздник
должен быть именно в весенний период
```

Рамбам в своем труде использует геоцентрическую систему, т.е. центральное положение
во Вселенной занимает планета Земля, вокруг которой вращаются Солнце, Луна и остальные планеты и звезды.
Сегодня, когда принята гелеоцентрическая система, это может показаться странным, но
т.к. данное положение ничего не меняет в самих расчетах, то можно продолжать дальше.

Однако хочется здесь привести отрывок из книги The Evolution of physics Альберта Эйнштейна, что была издана 1961 году.

```
The struggle, so violent in the early day of science, between
the views of Ptolemy and Copernicus would then be quite
meaningless. Either CS(Coordinate Systems) could be used with
equal justification. The two sentences, the sun is at rest and
the earth moves, or the sun moves and the earth is at rest,
would simply mean two different conventions concerning two
different CS. Could we build a real relativistic physics valid
in all CS; a physics in which there would be no place for
absolute, but only for relative motions? This is indeed possible!
```


А также письмо Любавического Ребе профессору Грину
```
For years the Plotomic system was accepted as true, according to
which the sun revolves around the earth. Later Copernicus evolved
the theory that the earth revolves around the sun. This is theory
which is now given in all text-books as an indisputable fact.

But what are the facts? Aside from the fact that even the
Copernican sun centered system is no more than a theory,
subject to a variety of reservations, as all scientific theories
must be; apart, also, from the fact that Copernican theory
did not presume to settle all the questions relating to
astro-physical observations, but only answered more questions,
and more simply, than the Plotomaic - modern science has
reached some revolutionary conclusions in the wake of the General
Relativity Theory. Specifically, modern science is now convinced that when two systems are in motion relative to one another, it
could never be ascertained, from the scientific viewpoint, as
to which is in motion and which at rest, or whether both are in motion.
Let it be remembered that the General Relativity Theory has been
accepted as fundamental to all exact sciences without dissent.

Yet - and it is surely no revelation to you - this new
orientation in science is ignored in discussions relating, to
the Plotomaic and Copernican theories not only on the high
school level, but even in specialized studies of astronomy and
physics in colleges and universities. In other words, science
in many domains is still taught in terms of a scientific
orientation which prevailed at the close of the 19th century,
when two cardinal principles of modern science were yet unknown,
namely the relativity theory, and that all scientific conclusions
necessarily belong in the realm of probability, not certainty.

I once asked a proffesor of science why he did not tell his
students that from viewpoint of the relativity theory the
Plotomaic system could claim just as much validity as the
Copernican. He answered candidly that if he did that, he
would lose his standing in the academic world, since
he would be at variance with the prevalent legacy from the
19th century. I countered, "What about the moral issue?".
The answer was silence.

In discussing this question with another scientist, he
expressed surprise that there should be an individual in the
20th century who could still think that the earth stood still
and the sun revolved around it. When I protested that from
the viewpoint of modern science this could be as valid as the
opposity theory, he could not refute it.
```
---

Система счисления времени, употребляемая Рамбамом, частично отличаться от принятой сегодня в мире,
так в сутках 24 часа, а в одном часу 1080 частей, каждая часть также делится на 76 мгновений.

(Число 1080 взято, т.к. оно делиться на 2,3,4,5,6,8,9,10)

В соответсвии с этой системой лунный месяц длиться в среднем `29 дней 12 часов и 793 частей`.

Солнечный год длиться `365 дней и 6 часов`.

Таким образом лунный год равен `29.12.793 * 12 = 354.8.876`.

Тогда с каждым годом разница между солнечным и лунным календарями будет равна `365.6 - 354.8.876 = 10.21.204`.

Последствия такого сдвига понятны - одни и те же даты
в лунном календаре будут выпадать на разные сезоны года.

В солнечном календаре минусом будет, то что месяц теряет значения, являясь лишь условным отрезком времени.

---

## Молад

В данной главе нас будет интересовать только день недели час и частицы
рождения новой луны, поэтому сколько бы дней не было все будет делиться по
модулю от 7.

Самые первые константы, которые пишет Рамбам это скорость светил.

Скорость солнца `0.59.8.19.48` градусов в день
Скорость луны `13.10.35.1.48` градусов в день

Следовательно скорость луны относительно солнца:

`13.10.35.1.48 - 0.59.8.19.48 = 12.11.26.42` градусов

Тогда лунный месяц является:

`360/12.11.26.42 = 29.12.793` дней

Обычный год `29.12.793 * 12 = 354.8.876` дням

Високосный год `29.12.793 * 13 = 383.21.589` дням

Остаток лунного месяца - `29.12.793 % 28 = 1.12.793`

Таким образом если нам известно время рождения лунны одного месяца, то можно узнать рождение следующей луны, добавив к этому числу `1.12.793`.

Точно также можно узнать остаток обычного и високосного года:

`354.8.876 % 350(7 * 50) = 4.8.876`

`383.21.589 % 378(7 * 54) = 5.21.589`

Благодаря этой информации можно также узнать рождение новой луны через год.
Например если мы знаем что рождение луны месяца тишрей 5773 года было `1.7.1034`,
а также известно что это не високосный год, то для того чтобы узнать рождение луны
месяца тишрей 5774 года, то нужно прибавить к нему `4.8.876`.
`1.7.1034 + 4.8.876 = 5.16.830`. Точно также можно сделать




---
## ToDo Chapters:
#### 1. Введение
#### 2. Молад
#### 3. Рош-ашона
#### 4. Дни месяца
#### 5. Сезоны года
