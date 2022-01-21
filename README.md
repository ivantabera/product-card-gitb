# product-card-gitb

Este es un paquete de pruebas de despliegue en NPM

### Fernando Herrera

## Ejemplo


```
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from 'product-card-gitb';
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