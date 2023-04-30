from sqlalchemy import text, create_engine, engine

POSTGRES_CONNECTION_STRING = str


class postgres_wrapper:
    # postgres://root:admin@localhost:5432/transactions
    def __init__(
        self, username: str, password: str, host: str, port: int, database: str
    ) -> None:
        self.username = username
        self.password = password
        self.host = host
        self.port = port
        self.database = database

        self.engine = self.__get_engine()

    def __make_connection_string(self) -> POSTGRES_CONNECTION_STRING:
        return f"postgresql+psycopg2://{self.username}:{self.password}@{self.host}:{self.port}/{self.database}"

    def __get_engine(self) -> engine:
        try:
            return create_engine(self.__make_connection_string())
        except Exception as e:
            raise e

    def query(self, query: str) -> None:
        try:
            with self.engine.connect() as conn:
                results = conn.execute(text(query))
                conn.commit()
            return None
        except Exception as e:
            print(e)
