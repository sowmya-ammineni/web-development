<!DOCTYPE html>
<html>
<head>
    <title>Largest of three numbers</title>
</head>
<body>
<script type="text/javascript">
    var a, b, c;
    a = 15;
    b = 65;
    c = 84;
    if(a > b)
    {
        if(a > c)
            document.write("<h2>a is largest number</h2>");
        else
            document.write("<h2>c is largest number</h2>");
    }
    else
    {
        if(b > c)
            document.write("<h2>b is largest number</h2>");
        else
            document.write("<h2>c is largest number</h2>");
    }
</script>
</body>
</html>