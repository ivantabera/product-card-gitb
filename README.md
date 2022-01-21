# product-card-gitb

Este es un paquete de prueba de despliegue en NPM

### Ivan Tabera

## Ejemplo

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'product-card-gitb';
```

```
<ProductCard 
    product={product}
    initialValues={{
        count:4,
        maxCount:10
    }}
>
    {
        ({ count, isMaxCountReached, maxCount, increaseBy, reset }) => (
            <>
                <ProductImage />
                <ProductTitle />
                <ProductButtons />
            </>
        )
    }
    
</ProductCard>
```