
package com.banana.controller;

import com.banana.model.User;
import org.hibernate.*;


/**
 *
 * @author Dell
 */
public class Operaciones {
    public static void altaUser(User user){
        SessionFactory sesion = NewHibernateUtil.getSessionFactory();
        Session session;
        session=sesion.openSession();
        Transaction tx=session.beginTransaction();
        session.save(user);
        tx.commit();
        session.close();
        System.out.println("Usuairo insertado");
    }
    
    public static User BuscarUsuario(Integer idUser){
        
        User usr;
        SessionFactory sesion = NewHibernateUtil.getSessionFactory();
        Session session;
        session = sesion.openSession();
        Transaction tx = session.beginTransaction();
        usr = (User) session.get(User.class, idUser);
        tx.commit();
        session.close();
             
        return usr;
    }
}
