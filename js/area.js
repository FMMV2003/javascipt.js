<script>
    var r1, r2;
    r1 = prompt("Colocar Raio 1 (Círculo Exterior)")
    while (r1 != null) {
    	r2 = prompt("Colocar Raio 2 (Círculo Interior)")
        alert("area = " + (area(r1) - area(r2))) // parens are needed!
        r1 = prompt("Colocar Raio 1 (Círculo Exterior)")
    }

    function area(r) {
    	return 3.1416 * r * r
    }
</script>