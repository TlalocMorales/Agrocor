import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ProductService } from '../product.service';
import { Product } from '../product.models';

@Component({
  selector: 'app-productos',
  templateUrl: 'productos.page.html',
  styleUrls: ['productos.page.scss']
})
export class ProductosPage {

  public products: Product[] = [];
  public productsFounds: Product[] = [];
  public filter = [
    "Fertilizantes",
    "Herbicida",
    "Fungicida",
    "Bactericida",
    "Natural",
    "Granel",
    "Liquido"
  ];
  public productsCar: Product[] = [];
  total: number = 0;

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private productService: ProductService
  ) {


    //Fertilizantes
    this.products.push({
      id: 1,
      name: "Coca Cola",
      price: 20,
      photo: "https://picsum.photos/200/300?randmom=",
      type: "Fertilizantes" ,
      description: "Sabor Cola", 
      color:"tertiary",
      quantity: 5
    });
    this.products.push({
      id: 2,
      name: "Galletas Oreo",
      price: 17,
      photo: "https://picsum.photos/200/300?randmom=",
      type: "Fertilizantes" ,
      description: "Sabor Chocolate", 
      color:"tertiary",
      quantity: 5
    });
    this.products.push({
      id: 3,
      name: "Takis Fuego Azul",
      price: 20,
      photo: "https://picsum.photos/200/300?randmom=",
      type: "Fertilizantes" ,
      description: "Sabor Chile", 
      color:"tertiary",
      quantity: 5
    });


    //Herbicida
    this.products.push({
      id: 4,
      name: "Pinol",
      price: 18,
      photo: "https://picsum.photos/200/300?randmom=",
      type: "Herbicida",  
      description: "Limpiador para pisos",
      color:"warning",
      quantity: 5
    });
    this.products.push({
      id: 5,
      name: "Cloro",
      price: 23,
      photo: "https://picsum.photos/200/300?randmom=",
      type: "Herbicida",  
      description: "Limpia el 99% de las vacterias",
      color:"warning",
      quantity: 5
    });
    this.products.push({
      id: 6,
      name: "Pastilla para baño",
      price: 18,
      photo: "https://picsum.photos/200/300?randmom=",
      type: "Herbicida",  
      description: "Aroma a rosas",
      color:"warning",
      quantity: 5
    });


    //Fungicida
    this.products.push({
      id: 7,
      name: "Ahuacate Hash",
      price: 8,
      photo: "https://picsum.photos/200/300?randmom=",
      type: "Fungicida",      
      description: "Muy rico",
      color:"secondary",
      quantity: 5
    });
    this.products.push({
      id: 8,
      name: "Pepino",
      price: 8,
      photo: "https://picsum.photos/200/300?randmom=",
      type: "Fungicida",      
      description: "Ps ta chido",
      color:"secondary",
      quantity: 5
    });
    this.products.push({
      id: 9,
      name: "Lmon",
      price: 8,
      photo: "https://picsum.photos/200/300?randmom=",
      type: "Fungicida",      
      description: "Chido y jugoso",
      color:"secondary",
      quantity: 5
    });


    //Bactericida
    this.products.push({
      id: 10,
      name: "Paracetamol",
      price: 20,
      photo: "https://picsum.photos/200/300?randmom=",
      type: "Bactericida",  
      description: "Te alivias porque te alivias",
      color:"danger",
      quantity: 5 
    });
    this.products.push({
      id: 11,
      name: "Alcohol 96%",
      price: 20,
      photo: "https://picsum.photos/200/300?randmom=",
      type: "Bactericida",  
      description: "OJO no se toma",
      color:"danger",
      quantity: 5  
    });
    this.products.push({
      id: 12,
      name: "Agua Oxigenada",
      price: 20,
      photo: "https://picsum.photos/200/300?randmom=",
      type: "Bactericida",  
      description: "Como agua pero oxigenada",
      color:"danger",
      quantity: 5    
    });

        //Natural
    this.products.push({
      id: 7,
      name: "Ahuacate Hash",
      price: 8,
      photo: "https://picsum.photos/200/300?randmom=",
      type: "Natural",      
      description: "Muy rico",
      color:"secondary",
      quantity: 5
    });
    this.products.push({
      id: 8,
      name: "Pepino",
      price: 8,
      photo: "https://picsum.photos/200/300?randmom=",
      type: "Natural",      
      description: "Ps ta chido",
      color:"secondary",
      quantity: 5
    });
    this.products.push({
      id: 9,
      name: "Lmon",
      price: 8,
      photo: "https://picsum.photos/200/300?randmom=",
      type: "Natural",      
      description: "Chido y jugoso",
      color:"secondary",
      quantity: 5
    });


    //Granel
    this.products.push({
      id: 7,
      name: "Ahuacate Hash",
      price: 8,
      photo: "https://picsum.photos/200/300?randmom=",
      type: "Granel",      
      description: "Muy rico",
      color:"secondary",
      quantity: 5
    });
    this.products.push({
      id: 8,
      name: "Pepino",
      price: 8,
      photo: "https://picsum.photos/200/300?randmom=",
      type: "Granel",      
      description: "Ps ta chido",
      color:"secondary",
      quantity: 5
    });
    this.products.push({
      id: 9,
      name: "Lmon",
      price: 8,
      photo: "https://picsum.photos/200/300?randmom=",
      type: "Granel",      
      description: "Chido y jugoso",
      color:"secondary",
      quantity: 5
    });


    //Liquido
    this.products.push({
      id: 7,
      name: "Ahuacate Hash",
      price: 8,
      photo: "https://picsum.photos/200/300?randmom=",
      type: "Liquido",      
      description: "Muy rico",
      color:"secondary",
      quantity: 5
    });
    this.products.push({
      id: 8,
      name: "Pepino",
      price: 8,
      photo: "https://picsum.photos/200/300?randmom=",
      type: "Liquido",      
      description: "Ps ta chido",
      color:"secondary",
      quantity: 5
    });
    this.products.push({
      id: 9,
      name: "Lmon",
      price: 8,
      photo: "https://picsum.photos/200/300?randmom=",
      type: "Liquido",      
      description: "Chido y jugoso",
      color:"secondary",
      quantity: 5
    });



    this.productsFounds=this.products;

    this.calculateTotal();

  }

  saveProduct(product: Product): void {
    this.productService.createProduct(product).subscribe(
      (response) => {
        console.log('Producto guardado exitosamente:', response);
        // Puedes actualizar la lista de productos si es necesario
      },
      (error) => {
        console.error('Error al guardar el producto:', error);
      }
    );
  }
  

  public filterProducts():void{
    console.log(this.filter);
    this.productsFounds=this.products.filter(
      item => {
        return this.filter.includes(item.type);
      }
    );
  }

  public setCar(product: Product): void {
    const existingProduct = this.productsCar.find((p) => p.id === product.id);
  
    if (existingProduct) {
      // El producto ya existe en el carrito, aumenta la cantidad
      existingProduct.quantity++;
    } else {
      // El producto no está en el carrito, agrégalo con cantidad 1
      product.quantity = 1;
      this.productsCar.push(product);
    }
    this.calculateTotal();
  }
  

  goToTicket(): void {
    // Antes de navegar al ticket, guarda los productos en la base de datos
    for (const product of this.productsCar) {
      this.saveProduct(product);
    }

    this.router.navigate(['/ticket'], {
      state: {
        productsCar: this.productsCar,
        total: this.total
      }
    });
  }

  decreaseQuantity(index: number): void {
    if (this.productsCar[index].quantity > 1) {
      this.productsCar[index].quantity--;
      this.calculateTotal();
    }
  }

  // Función para aumentar la cantidad de un producto
  increaseQuantity(index: number): void {
    this.productsCar[index].quantity++;
    this.calculateTotal();
  }

  // Función para quitar un producto del carrito
  removeProduct(index: number): void {
    this.productsCar.splice(index, 1);
    this.calculateTotal();
  }


  calculateTotal() {
    return this.total = this.productsCar.reduce((acc, product) => acc + product.price * product.quantity, 0);
  }

  goBack(): void {
    this.navCtrl.navigateBack('/menu');
  }

}
