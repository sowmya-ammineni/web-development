<!DOCTYPE html>
<html>
<head>
    <title></title>
    <scrpt type="text/javascript">
        function convert(){
           var kms=document.get element by Id('data').value;
           const factor=0.621371;
           var miles=kms*factor;
           document.get element by Id('res').inner text='${c}C=${f}F';
        }
    </script>
    <style type="text/css">
    </style>
</head>
<body>
    <input type="" name="" id="data"/>C
    <br/>
    <button onclick="convert()">convert</button>
    <h1 id="res"><</h1>
</body>
</html>
