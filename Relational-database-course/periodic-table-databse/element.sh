#! /bin/bash

PSQL="psql --username=freecodecamp --dbname=periodic_table -t --no-align -c"

if [[ $1 ]]
then 
  # modificar consulta si la entrada es un numero o no (dividimos en dos en la misma variable)
  if [[ $1 =~ ^-?[0-9]+$ ]]
  then
    GET_ELEMENT=$($PSQL "SELECT * FROM elements INNER JOIN properties USING(atomic_number) INNER JOIN types USING(type_id) WHERE atomic_number = $1")
  else
    GET_ELEMENT=$($PSQL "SELECT * FROM elements INNER JOIN properties USING(atomic_number) INNER JOIN types USING(type_id) WHERE symbol='$1' OR name = '$1'")
  fi
  
  if [[ -z $GET_ELEMENT ]]
  then
  echo -e "I could not find that element in the database."
  else
    echo "$GET_ELEMENT" | sed 's/|/ /g' | while read TYPE_ID NUMBER SYMBOL NAME MASS MELTING BOILING TYPE
    do
      echo -e "The element with atomic number $NUMBER is $NAME ($SYMBOL). It's a $TYPE, with a mass of $MASS amu. $NAME has a melting point of $MELTING celsius and a boiling point of $BOILING celsius."
    done
  fi 
else
  echo -e "Please provide an element as an argument."
fi
