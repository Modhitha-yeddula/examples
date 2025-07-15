package SetEx;
import java.util.HashSet;
public class TestOne{
    public static void main(String[] args){
        HashSet eids=new HashSet<>(20,0.5f);
        eids.add(101);
        eids.add(101);
        eids.add(102);
        eids.add(103);
        eids.add(104);
        eids.add(105);
        eids.add(106);
        eids.add(107);
        eids.add(108);
        eids.add(109);
        eids.add(110);
        System.out.println(eids);
    }
}