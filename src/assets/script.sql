CREATE TABLE IF NOT EXISTS monitoss(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    monito TEXT,
    estado_salud TEXT
);

INSERT OR IGNORE INTO monitoss (id, monito, estado_salud) VALUES (1,'Rick','Vivo en la tierra');