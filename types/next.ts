export declare type Params<P> = { [key in keyof P]: string };
export declare type PageProps<P extends Params<P>, SP extends Params<SP>> = {
  params: P;
  searchParams: SP;
};
export declare type GenerateStaticParams<P extends Params<P>> = () => Promise<
  P[]
>;
