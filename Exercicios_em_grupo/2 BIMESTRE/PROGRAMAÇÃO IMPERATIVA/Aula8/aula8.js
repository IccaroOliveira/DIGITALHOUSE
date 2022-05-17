function podeSubir(altura, vemAcompanhado){
    let podeSubir = false
    if(altura &lt;= 2.0 &amp;&amp; altura &gt;= 1.20){
    podeSubir = true
    }
    if(altura &gt;= 1.20 &amp;&amp; vemAcompanhado){
    podeSubir = true
    }
    return podeSubir
    }
    function podeSubir(altura,vemAcompanhado){
    if((altura &lt;= 2.0 &amp;&amp; altura &gt;= 1.20) || (altura &gt;= 1.20 &amp;&amp;
    vemAcompanhado)){
    return true
    }
    else{
    return false
    }
    }
    function podeSubir(altura,vemAcompanhado){
    return (altura &lt;= 2.0 &amp;&amp; altura &gt;= 1.20) || (altura &gt;= 1.20 &amp;&amp;
    vemAcompanhado)
    }