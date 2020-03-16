module Main exposing (main)

import Browser
import Html exposing (..)
import Html.Events exposing (onClick)


type alias Movie =
    { name : String }


type alias Group =
    { title : String
    , movies : List Movie
    }

recommended : Group
recommended =
    { title = "Recommended"
    , movies =
        [ Movie "Back to the Future"
        , Movie "The Matrix"
        , Movie "Star Trek"
        ]
    }


latest : Group
latest =
    { title = "Latest"
    , movies =
        [ Movie "Ready Player One"
        , Movie "Jurrasic World"
        , Movie "Star Wars The Last Jedi"
        ]
    }


trending : Group
trending =
    { title = "Trending"
    , movies =
        [ Movie "Alf"
        , Movie "Letterkenny"
        , Movie "McGyver"
        , Movie "The Simpsons Movie"
        ]
    }


mylist : Group
mylist =
    { title = "My List"
    , movies =
        [ Movie "The Running Man"
        , Movie "Water World"
        , Movie "The Watchmen"
        ]
    }


type alias Model =
    Group


init : Model
init =
    latest


type Msg
    = SetGroup Group


update : Msg -> Model -> Model
update msg model =
    case msg of
        SetGroup group ->
            group


view : Model -> Html Msg
view model =
    div []
        [ button [ onClick <| SetGroup latest ] [ text "Latest" ]
        , button [ onClick <| SetGroup recommended ] [ text "Recommended" ]
        , button [ onClick <| SetGroup trending ] [ text "Trending" ]
        , button [ onClick <| SetGroup mylist ] [ text "MyList" ]
        , div []
            [ h3 [] [ text model.title ]
            , ul [] <| List.map (\{ name } -> li [] [ text name ]) model.movies
            ]
        ]


main : Program () Model Msg
main =
    Browser.sandbox
        { init = init
        , view = view
        , update = update
        }
