

INITIAL_INDEX = 1
INITIAL_PLAYER_INDEX = 1
TOTAL_MOVES_INITIAL = 0

#   Sums
INITIAL_SUM = 0
FULL_SUM = 120

TEAM_MAX = 12
TEAM_MAX_LOCAL = 120

#   indices of players
FIRST_PLAYER_INDEX = 1
SECOND_PLAYER_INDEX = 2
THIRD_PLAYER_INDEX = 3
FOURTH_PLAYER_INDEX = 4

#   names of players
FIRST_PLAYER_NAME = u'FIRST_PLAYER'
SECOND_PLAYER_NAME = u'SECOND_PLAYER'
THIRD_PLAYER_NAME = u'THIRD_PLAYER'
FOURTH_PLAYER_NAME = u'FOURTH_PLAYER'

MOVES_QUEUE = (
    (FIRST_PLAYER_INDEX, u'FIRST_PLAYER_NAME'),
    (SECOND_PLAYER_INDEX, u'SECOND_PLAYER_NAME'),
    (THIRD_PLAYER_INDEX, u'THIRD_PLAYER_NAME'),
    (FOURTH_PLAYER_INDEX, u'FOURTH_PLAYER_NAME'),
)

#   indices of teams
TEAM_ONE = (
    (FIRST_PLAYER_INDEX, FIRST_PLAYER_NAME),
    (THIRD_PLAYER_INDEX, THIRD_PLAYER_NAME),
)
TEAM_TWO = (
    (SECOND_PLAYER_INDEX, SECOND_PLAYER_NAME),
    (FOURTH_PLAYER_INDEX, FOURTH_PLAYER_NAME),
)

#   Names of teams
TEAM_ONE_NAME = u'team_01'
TEAM_TWO_NAME = u'team_02'

TEAMS = (
    (TEAM_ONE, TEAM_ONE_NAME),
    (TEAM_TWO, TEAM_TWO_NAME),
)

MATCH_NAME = u'match'

ROOM_NAME = u'room'

SEVEN = 7
SEVEN_WORTH = 0
EIGHT = 8
EIGHT_WORTH = 0
NINE = 9
NINE_WORTH = 0
JACK = 10
JACK_WORTH = 2
QUEEN = 11
QUEEN_WORTH = 3
KING = 12
KING_WORTH = 4
TEN = 13
TEN_WORTH = 10
ACE = 14
ACE_WORTH = 11

TRUMP_PRIORITY_SEVEN = 93
TRUMP_PRIORITY_EIGHT = 94
TRUMP_PRIORITY_NINE = 95
TRUMP_PRIORITY_JACK = 100
TRUMP_PRIORITY_QUEEN = 96
TRUMP_PRIORITY_KING = 97
TRUMP_PRIORITY_TEN = 98
TRUMP_PRIORITY_ACE = 99

CARD_NUMBERS = (
    (SEVEN, SEVEN_WORTH, TRUMP_PRIORITY_SEVEN, u'7'),
    (EIGHT, EIGHT_WORTH, TRUMP_PRIORITY_EIGHT, u'8'),
    (NINE, NINE_WORTH, TRUMP_PRIORITY_NINE, u'9'),
    (TEN, TEN_WORTH, TRUMP_PRIORITY_TEN, u'10'),
    (JACK, JACK_WORTH, TRUMP_PRIORITY_JACK, u'jack'),
    (QUEEN, QUEEN_WORTH, TRUMP_PRIORITY_QUEEN, u'queen'),
    (KING, KING_WORTH, TRUMP_PRIORITY_KING, u'king'),
    (ACE, ACE_WORTH, TRUMP_PRIORITY_ACE, u'ace'),
)

CARD_NAMES = (
    (SEVEN, u'7'),
    (EIGHT, u'8'),
    (NINE, u'9'),
    (TEN, u'10'),
    (JACK, u'jack'),
    (QUEEN, u'queen'),
    (KING, u'king'),
    (ACE, u'ace'),
)

#   Values of Trumps
CLUBS_VALUE = 1
SPADES_VALUE = 2
HEARTS_VALUE = 3
DIAMONDS_VALUE = 4

#   for ace allowed counting
ACE_OF_CLUBS_VALUE = ACE + CLUBS_VALUE * 100
ACE_OF_SPADES_VALUE = ACE + SPADES_VALUE * 100
ACE_OF_HEARTS_VALUE = ACE + HEARTS_VALUE * 100
ACE_OF_DIAMONDS_VALUE = ACE + DIAMONDS_VALUE * 100

#   Names of trumps
CLUBS_NAME = u'clubs'
SPADES_NAME = u'spades'
HEARTS_NAME = u'hearts'
DIAMONDS_NAME = u'diamonds'

INITIAL_TRUMP = 1

SUITS = (
    (CLUBS_VALUE, CLUBS_NAME),
    (SPADES_VALUE, SPADES_NAME),
    (HEARTS_VALUE, HEARTS_NAME),
    (DIAMONDS_VALUE, DIAMONDS_NAME),
)

INITIAL_CIRCLE = 1
FINAL_CIRCLE = 8

HIDE_LAST = 4

RUSSIAN = 1
KAZAKH = 2
ENGLISH = 3

RUSSIAN_NAME = u'русский'
KAZAKH_NAME = u'қазақша'
ENGLISH_NAME = u'english'

LANGUAGES = (
    (RUSSIAN, RUSSIAN_NAME),
    (KAZAKH, KAZAKH_NAME),
    (ENGLISH, ENGLISH_NAME),
)

ON_SAVE_SUM_30 = 30
ON_SAVE_SUM_31 = 31

ON_SAVE = (
    (ON_SAVE_SUM_30, u'on_save_30'),
    (ON_SAVE_SUM_31, u'on_save_31'),
)

ON_FULL_OPEN_FOUR = 1
ON_FULL_FINISH_GAME = 2

ON_FULL = (
    (ON_FULL_OPEN_FOUR, u'on_full_open_four'),
    (ON_FULL_FINISH_GAME, u'on_full_finish_game'),
)

ON_EGGS_OPEN_FOUR = 1
ON_EGGS_OPEN_DOUBLE = 2

ON_EGGS = (
    (ON_EGGS_OPEN_FOUR, u'on_eggs_open_four'),
    (ON_EGGS_OPEN_DOUBLE, u'on_eggs_open_double'),
)
