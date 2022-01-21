import React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/products';


describe('ProducImage', () => {

    test('debe mostrar el componente correctamente con la data de la imagen', () => {

        const wrapper = renderer.create(
            <ProductImage img='https://holaa8.webnode.es/album/holaa/hola-jpg/' />
        )
        
        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('debe de mostrar el componente ccon la imagen del producto', () => {

        const wrapper = renderer.create(
            <ProductCard product={ product2 } > 
                {
                    () => (
                        <ProductImage />
                    )
                }
            </ProductCard>
        )
        
        expect(wrapper.toJSON()).toMatchSnapshot();

    });
    
    
});

