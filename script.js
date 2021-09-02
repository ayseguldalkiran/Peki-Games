$(document).ready(function() {
    $.getJSON("http://www.pekigames.com/lessons.json", function(json) {
        $("#lecture-title-one").append(json.title);
        json.content.forEach((element, index) => {
            $("#tema-title-" + element.lesson_cat_id).append(
                element.lesson_cat_title
            );
            $("#lesson-start-date-" + element.lesson_cat_id).append(
                element.lesson_start_date
            );
            // $("#total-count-" + element.lesson_cat_id).append
            //     // element.total
            //     ();
            $("#solved-count-" + element.lesson_cat_id).append(element.lesson_solved);
            $("#correct-count-" + element.lesson_cat_id).append(
                element.lesson_correct
            );
            $("#wrong-count-" + element.lesson_cat_id).append(element.lesson_wrong);
            $("#lesson-success-" + element.lesson_cat_id).append(
                element.lesson_success + "%"
            );
            $("#lesson-success-bar-" + element.lesson_cat_id).css(
                "width",
                element.lesson_success + "%"
            );
            $("#lesson-earnings-" + element.lesson_cat_id).append(
                element.lesson_earnings + "%"
            );
            $("#lesson-earnings-bar-" + element.lesson_cat_id).css(
                "width",
                element.lesson_earnings + "%"
            );
            element.lesson_sub.forEach((element) => {
                $("#lesson-sub-cat-title-" + element.lesson_sub_cat_id).append(
                    element.lesson_cat_title
                );
                $("#lesson-sub-correct-" + element.lesson_sub_cat_id).append(
                    element.lesson_correct
                );
                $("#lesson-sub-total-" + element.lesson_sub_cat_id).append(
                    element.lesson_solved
                );
                $("#lesson-sub-wrong-" + element.lesson_sub_cat_id).append(
                    element.lesson_wrong
                );
                $("#lesson-sub-success-" + element.lesson_sub_cat_id).append(
                    element.lesson_success + "%"
                );
                $("#lesson-sub-earnings-" + element.lesson_sub_cat_id).css(
                    "width",
                    element.lesson_earnings + "%"
                );
                element.lessons.forEach((subelement, index, array) => {
                    $("#lesson-inner-sub-lesson-title-" + subelement.lesson_id).append(
                        subelement.lesson_title
                    );
                    $("#lesson-inner-sub-lesson-total-" + subelement.lesson_id).append(
                        subelement.lesson_solved
                    );
                    $("#lesson-inner-sub-lesson-correct-" + subelement.lesson_id).append(
                        subelement.lesson_correct
                    );
                    $("#lesson-inner-sub-lesson-wrong-" + subelement.lesson_id).append(
                        subelement.lesson_wrong
                    );
                    $("#lesson-inner-sub-lesson-success-" + subelement.lesson_id).append(
                        subelement.lesson_success + "%"
                    );
                    $("#lesson-inner-sub-lesson-earnings-" + subelement.lesson_id).css(
                        "width",
                        subelement.lesson_earnings + "%"
                    );
                });
            });
        });
    });

    $("#header-dropdown-button").click(function() {
        var button = document.getElementById("header-dropdown-button");
        var content = document.getElementById("lcc-selector");
        if (button.getAttribute("dropdown-active") == "true") {
            button.setAttribute("dropdown-active", "false");
            content.setAttribute("flex", "0");
            $(".lecture-content-container").css("flex", "0");
            $(".lecture-content-wrapper").css("min-height", "0");
            $(".container").css("display", "none");
        } else {
            button.setAttribute("dropdown-active", "true");
            $(".lecture-content-container").css("flex", "5");
            $(".lecture-content-wrapper").css("min-height", "300px");
            $(".container").css("display", "block");
        }
    });
    $(".right-wrapper-responsive-button").click(function() {
        if ($(".right-board-wrapper").hasClass("right-board-wrapper-responsive")) {
            $(".right-board-wrapper").removeClass("right-board-wrapper-responsive");
        } else {
            $(".right-board-wrapper").addClass("right-board-wrapper-responsive");
        }
    });
    $(".menu-container-responsive-button").click(function() {
        if ($(".menu-container").hasClass("menu-container-responsive")) {
            $(".menu-container").removeClass("menu-container-responsive");
        } else {
            $(".menu-container").addClass("menu-container-responsive");
        }
    });
    $("#row-data-one").click(function() {
        if ($(".lecture-details-one").css("display") == "none") {
            $(".lecture-details-one").css("display", "table-row");
        } else {
            $(".lecture-details-one").css("display", "none");
        }
    });
});