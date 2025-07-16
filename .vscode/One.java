package MethodReference;

import java.util.function.Consumer;

public class One {
    static void m1(String msg){
        System.out.println(msg);
    }
   class Demo{
       public static void main(String[] args) {
           Consumer<String> c=One::m1;
           c.accept("hello");
       }
   }

}