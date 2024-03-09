
### Emiting data 


```vue
<MatrixForm
    @matrixSubmitClicked="checkRef" 
/>
```

```vue
<script>
methods: {
    checkRef(matrix, foo) {
        console.log(`matrixSubmitClicked`);
        console.log(matrix);
        console.log(foo);

    }
}
</script>
```

```js
this.$emit('matrixSubmitClicked', this.matrix, foo);
```