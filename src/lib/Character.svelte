<script>
    import { esPC } from '../screenAncho.js';
    export let character
    
    console.log($esPC)
    function nombreLargo()
    {
        const nx=character.name;
        if($esPC)  
        {
            return nx;                
        }
        else
        {  
            if(nx.length>21)
            {
                return nx.substring(0,20)+"*";
            }
            else{
                return nx;
            }
        }
        
      }
   $: nombrex=nombreLargo()
</script>
<div class="character" >
    <img src={character.image} alt={character.name}>
    <span 
        class="{ $esPC   ? 'nombre':'nombreñ'}">
        {nombrex}        
    </span>

</div>
