    $(document).ready(function() {
        var max_fields      = 10; //maximum input boxes allowed
        var wrapper         = $(".input_fields_wrap"); //Fields wrapper
        var add_button      = $(".add_field_button"); //Add button ID

        var x = 1; //initlal text box count
        $(add_button).click(function(e){ //on add input button click
            e.preventDefault();
            if(x < max_fields){ //max input box allowed
                x++; //text box increment
                $(wrapper).append('        <div>\n' +
                    '        <div class="x_title">\n' +
                    '            <h2>ردیف '+x+'</h2>\n' +
                    '\n' +
                    '            <div class="clearfix"></div>\n' +
                    '        </div>\n' +
                    '\n' +
                    '        <div class="form-group col-md-4 col-sm-4 ">\n' +
                    '            <label class="control-label col-md-3 col-sm-3 col-xs-12">موضوع <span class="required">*</span>\n' +
                    '            </label>\n' +
                    '            <div class="col-md-6 col-sm-6 col-xs-12">\n' +
                    '                <input id="birthday" class="date-picker form-control col-md-7 col-xs-12" required="required" type="text">\n' +
                    '            </div>\n' +
                    '        </div>\n' +
                    '\n' +
                    '        <div class="form-group col-md-4 col-sm-4 ">\n' +
                    '            <label class="control-label col-md-3 col-sm-3 col-xs-12">قیمت واحد <span class="required">*</span>\n' +
                    '            </label>\n' +
                    '            <div class="col-md-6 col-sm-6 col-xs-12">\n' +
                    '                <input id="birthday" class="oneprice date-picker form-control col-md-7 col-xs-12" required="required" type="text">\n' +
                    '            </div>\n' +
                    '        </div>\n' +
                    '\n' +
                    '        <div class="form-group col-md-4 col-sm-4 ">\n' +
                    '            <label class="control-label col-md-3 col-sm-3 col-xs-12">تعداد <span class="required">*</span>\n' +
                    '            </label>\n' +
                    '            <div class="col-md-6 col-sm-6 col-xs-12">\n' +
                    '                <input id="birthday" class="quantity date-picker form-control col-md-7 col-xs-12" required="required" type="text">\n' +
                    '            </div>\n' +
                    '        </div>\n' +
                    '\n' +
                    '        <div class="form-group col-md-12 col-sm-12 ">\n' +
                    '            <label class="control-label col-md-3 col-sm-3 col-xs-12">توضیحات <span class="required">*</span>\n' +
                    '            </label>\n' +
                    '            <div class="col-md-6 col-sm-6 col-xs-12">\n' +
                    '                <input id="birthday" class="date-picker form-control col-md-7 col-xs-12"  type="text">\n' +
                    '            </div>\n' +
                    '        </div>\n' +
                    '        <div class="ln_solid"></div>\n' +
                    '\n' +
                    '        </div>'); //add input box
            }
        });

        $(wrapper).on("click",".remove_field", function(e){ //user click on remove text
            e.preventDefault(); $(this).parent('div').remove(); x--;
        })
    });

    $(document).on('keyup', '.quantity, .net_rate .maliat', function () {
        calculate();
    })


    function calculate(){
        var maliat=0;
        var sum = 0;
        var qq=0;
        document.getElementById("Grand").value=sum;
        $(document.getElementsByClassName("oneprice")).each(function (i,e) {
            sum+=persianToEnglish(e.value)*persianToEnglish(document.getElementsByClassName("quantity")[i].value);
            qq++;
        })
        document.getElementById('Grand').innerHTML =moneyformat (sum)+ " ریال ";
        if( document.getElementById("maliat").checked)
        {
            maliat=sum*9/100;
            maliat= Math.round(maliat)
                document.getElementById('maliatcount').innerHTML =moneyformat( maliat)+ " ریال ";
        }
        document.getElementById('total').innerHTML = moneyformat(maliat+sum)+ " ریال ";

    };
    function moneyformat(moneyvalue) {
        moneyvalue=moneyvalue.toFixed(0).replace(/./g, function(c, i, a) {
            return i && c !== "." && ((a.length - i) % 3 === 0) ? ',' + c : c;
        });
        return moneyvalue;
    }
    function persianToEnglish(value) {
        var newValue="";
        for (var i=0;i<value.length;i++)
        {
            var ch=value.charCodeAt(i);
            if (ch>=1776 && ch<=1785) // For Persian digits.
            {
                var newChar=ch-1728;
                newValue=newValue+String.fromCharCode(newChar);
            }
            else if(ch>=1632 && ch<=1641) // For Arabic & Unix digits.
            {
                var newChar=ch-1584;
                newValue=newValue+String.fromCharCode(newChar);
            }
            else
                newValue=newValue+String.fromCharCode(ch);
        }
        return newValue;
    }