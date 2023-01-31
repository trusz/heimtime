<script>
    export let name=""
    export let id = ""
</script>

<example>
    <div>
        <h3>{name}</h3>
    </div>

    <slot></slot>
</example>

<style>
    example{
        display: block;
        margin-bottom: 3rem;
        position: relative;
    }
    h3{
        margin-bottom: 1rem;
    }
</style>