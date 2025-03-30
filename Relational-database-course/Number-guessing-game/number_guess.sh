#!/bin/bash


PSQL="psql --username=freecodecamp --dbname=number_guess -t --no-align -c"

UPDATE_BD()
{
  # update games played
  GAMES_QUANTITY=$($PSQL "SELECT games_played FROM users WHERE username = '$USERNAME'")
  GAMES_QUANTITY=$(( GAMES_QUANTITY + 1 ))
  UPDATE_GAMES=$($PSQL "UPDATE users SET games_played = $GAMES_QUANTITY WHERE username = '$USERNAME'")
  # checking best round
  BEST_ROUND=$($PSQL "SELECT best_round FROM users WHERE username = '$USERNAME'")
  # if is the first time or better than last time update
  if [[ -z $BEST_ROUND ]]
  then
    UPDATE_BEST_ROUND=$($PSQL "UPDATE users SET best_round = $COUNTER WHERE username = '$USERNAME'") 
  elif [[ $BEST_ROUND > $COUNTER ]]
  then
    UPDATE_BEST_ROUND=$($PSQL "UPDATE users SET best_round = $COUNTER WHERE username = '$USERNAME'") 
  fi
}

GUESS_NUM()
{
  if [[ $1 ]]
  then
    echo -e "\n$1"
  fi
  read USER_NUMBER

  if [[ ! "$USER_NUMBER" =~ ^-?[0-9]+$ ]]
  then
    COUNTER=$(( COUNTER ))
    GUESS_NUM "That is not an integer, guess again:"
  elif [[ $USER_NUMBER > $RANDOM_NUMBER ]]
  then
    COUNTER=$(( COUNTER + 1 ))
    GUESS_NUM "It's lower than that, guess again:"
  elif [[ $USER_NUMBER < $RANDOM_NUMBER ]]
  then
    COUNTER=$(( COUNTER + 1 ))
    GUESS_NUM "It's higher than that, guess again:"
  else
    COUNTER=$(( COUNTER + 1 ))
    UPDATE_BD
    echo "You guessed it in $COUNTER tries. The secret number was $RANDOM_NUMBER. Nice job!"
  fi
}

echo -e "\nEnter your username:"
read USERNAME

# check if is already in database
USER_IS_REGISTER=$($PSQL "SELECT * FROM users WHERE username = '$USERNAME'")

if [[ -z $USER_IS_REGISTER ]]
then
  LOGIN=$($PSQL "INSERT INTO users(username) VALUES('$USERNAME')")
  echo "Welcome, $USERNAME! It looks like this is your first time here."
else
  echo "$USER_IS_REGISTER" | sed 's/|/ /g' | while read USER_ID USERNAME BD_GAMES_PLAYED BD_BEST_ROUND
  do
    echo "Welcome back, $USERNAME! You have played $BD_GAMES_PLAYED games, and your best game took $BD_BEST_ROUND guesses."
  done
fi

RANDOM_NUMBER=$((RANDOM % 1000 + 1))
COUNTER=0
GUESS_NUM "Guess the secret number between 1 and 1000:" 
