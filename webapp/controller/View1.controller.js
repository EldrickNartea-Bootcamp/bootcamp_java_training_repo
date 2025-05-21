
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("bootcampjavatrainingrepo.controller.View1", {

        onExercise1: function () {
            let number = 789;

            const ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
            const teens = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
            const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

            let words = "";

            if (number >= 100) {
                words += ones[Math.floor(number / 100)] + " Hundred ";
                number %= 100;
            }

            if (number >= 20) {
                words += tens[Math.floor(number / 10)] + " ";
                number %= 10;
            } else if (number >= 10) {
                words += teens[number - 10] + " ";
                number = 0;
            }

            if (number > 0) {
                words += ones[number] + " ";
            }


            MessageToast.show(words.trim(), {
                my: "center center",
                at: "center center"
            });

        },



        onExercise2: function () {
            let height = 5;
            let pattern = "";

            while (height > 0) {
                let row = "";
                let i = 0;
                while (i < height) {
                    row += "* ";
                    i++;
                }
                pattern += row.trim() + "\n";
                height--;
            }

            MessageToast.
                show(pattern, {
                    my: "center center",
                    at: "center center"
                });

        },


        onExercise3: function () {
            let height = 5;
            let pattern = "";

            for (let i = 0; i < height; i++) {
                let row = "";
                for (let j = 0; j < height; j++) {
                    if (j === i || j === height - i - 1) {
                        row += "*";
                    } else {
                        row += " ";
                    }
                }
                pattern += row + "\n";
            }

            MessageToast.
                show(pattern, {
                    my: "center center",
                    at: "center center"
                });

        },

        onExercise4: function () {

            let side1 = 5;
            let side2 = 7;
            let side3 = 9;

            function calculatePerimeter(a, b, c) {
                return a + b + c;
            }

            let perimeter = calculatePerimeter(side1, side2, side3);

            MessageToast.show("Perimeter of the triangle is: " + perimeter, {
                my: "center center",
                at: "center center"
            });

        }


    });
});
