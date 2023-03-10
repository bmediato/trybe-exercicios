//type aliases
type obj = {
  bird: string;
}

type obj1 = {
  x: number;
  y: number;
}

function sum(value: obj1): number {
  return value.x + value.y;
}

type addres = {
  rua: string;
  numero: number;

}

// type union

type Estados = 'liquido' | 'solido' | 'gasoso';

type numberOrString = number | string;

type SO = 'linux' | 'macOs' | 'windows';

type vogais = 'a' | 'e' | 'i' | 'o' | 'u';