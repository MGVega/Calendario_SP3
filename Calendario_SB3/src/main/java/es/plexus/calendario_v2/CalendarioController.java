package es.plexus.calendario_v2;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.time.LocalDate;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.time.ZoneId;

@RestController
@RequestMapping("/calendario")
public class CalendarioController {

    private LocalDate fechaDeHoy(){
        LocalDate fechaHoy = LocalDate.now();
        return fechaHoy;
    }

    private String horaActualEnEspana() {
        // Obtiene la hora actual en la zona horaria de Madrid
        ZonedDateTime horaEnEspana = ZonedDateTime.now(ZoneId.of("Europe/Madrid"));

        // Cambia el formato para mostrar solo la hora
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("HH:mm:ss");
        return horaEnEspana.format(formatter); // Devuelve solo la hora
    }

    @GetMapping("/hoy")
    public String diaActual() {
        return this.horaActualEnEspana();
    }

}
