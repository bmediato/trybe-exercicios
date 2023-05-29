import area


PEOPLE_PER_SQUARE_METER = 2  # numero de pessoas por metro quadrado em média
FIELD_LENGTH = 60  # em metros
FIELD_WIDTH = 45  # em metros
area_at_concert = area.rectangle(FIELD_LENGTH, FIELD_WIDTH)
people_at_concert = area_at_concert * PEOPLE_PER_SQUARE_METER
print("Estão presentes no show aproximadamente", people_at_concert, "pessoas.")
